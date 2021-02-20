<template>
    <div class="ticket">
        <div class="left">
            <ul class="coulmn">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul>
            <div class="allseat">
                <div class="leftUp">
                    <div class="seatTitle">
                        <s></s>
                        <p>布达佩斯大剧院的银幕</p>
                    </div>
                    <div class="seatbody">
                        <div v-for="row in seatCol" :key="row">
                            <div v-for="col in seatCol"
                                :key="col"
                                class="seat"
                                :style="{width:seatWidth+'px',height:seatHeight+'px',display:'inline-block'}"
                                >
                                <div class="inner-Seat"  
                                   v-if="seatArray[row-1][col-1]!=-1"
                                   :class="seatArray[row-1][col-1]===2?'bought-seat':(seatArray[row-1][col-1]===1?'selected-seat':'unselected-seat')"
                                    @click="handleChooseSeat(row-1,col-1)"
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="leftDown">
                    <div class="seatChooseInfor">
                        <ul class="clearfix">
                            <li>
                                <span class="unselected-seat"></span>
                                可选座位
                            </li>
                            <li>
                                <span class="selected-seat"></span>
                                已选座位
                            </li>
                            <li>
                                <span class="bought-seat"></span>
                                不可选座位
                            </li>
                        </ul>
                        <p>本影厅共有座位{{allseatnum}}个，当前已售{{zhoudata1.seat_ticket_count}}个</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="right">
            <div class="rightUp">
                <div class="oimage">
                    <img  :src='zhoudata.image'>
                </div>
                <div class="msg">
                    <div>{{zhoudata.name}}</div>
                    <div>版本:   国语{{zhoudata.play_type}}</div>
                    <div>片长:   {{zhoudata.play_length}}分钟</div>
                </div>
            </div>
            <div class="rightDown">
                <div class="place">影院:
                    <span>{{odata.place}}</span>
                </div>
                <div class="ting">影厅:
                    <span>{{zhoudata1.studio}}</span>
                    </div>
                <div class="once">场次:
                    <span>{{zhoudata1.start_time}}</span>
                </div>
                <div class="oseat">
                    座位:
                    <div class="piao">
                        <div class="xiaopiao"
                            v-for="(item,index) in selectTicket"
                            :key="item.id"
                            @click="remove(index)"
                        >
                        {{item.row}}行{{item.col}}列
                        </div>
                        <p style="color:black">已选择<span style="color:#eb002a">{{selectTicket.length}}</span>个座位，再次点击座位可以取消</p>
                    </div>
                </div>
                <div class="jiage">
                    <div class="yuanjia">原价:￥{{zhoudata1.price}}x{{selectTicket.length}}</div>
                    <div class="allplace">总计:
                        <span style="color:#eb002a">
                        {{zhoudata1.price*selectTicket.length}}
                        </span>
                    </div>
                </div>
                <div class="xiadan"
                    @click="this.sendmsg"
                >确认信息，下单</div>
            </div>
        </div>
    </div>

</template>

<script>
import { create } from 'domain';
import store from '@/modules/login.js'
const odata = {
    image:'https://img.alicdn.com/bao/uploaded/i3/TB1ebtnTrvpK1RjSZPiXXbmwXXa_.jpg_300x300.jpg',
    name:'最好的我们',
    banben:'国语2D',
    time:'110',
    place:'布达佩斯大剧院',
    ting:'5号厅',
    once:'20:15',
    price:33.00,
}
const url = 'http://129.204.185.247:8000/api/app01/getplay';
const url1 = 'http://129.204.185.247:8000/api/app01/getschemebyplayid';
const url2 = 'http://129.204.185.247:8000/api/app01/getticketbyschemeid';
const url3 = 'http://129.204.185.247:8000/api/app01/buyticket';
export default {
    data(){
        return{
            seatRow:10,
            seatCol:10,
            seatArray:[],
            seatWidth:46,
            seatHeight:33,
            num:0,
            allseatnum:100,
            selectseatnum:50,
            odata,
            selectTicket:[],
            ok:0,
            id:null,
            sch_id:null,
            zhoudata:{},
            zhoudata1:{},
            selected:[]
        }
    },
    created(){
        this.id = this.$route.query.id,
        this.sch_id=this.$route.query.sch_id
        this.getdata();
        this.getticket();
    },
    mounted(){
        this.initSeatArray();
    },
    methods:{
        getticket(){
            fetch(url2,{
                method:'POST',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:'sch_id='+this.sch_id
                }).then(response => response.json())
                .then((data)=>{
                this.selected = data;
                // console.log(data);
            })
        },
        getdata(){
            fetch(url,{
                method:'POST',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:'id='+this.id
                }).then(response => response.json())
                .then((data)=>{
                data[0].image ='http://129.204.185.247:8000'+ data[0].image
                // this.movie = data[0];
                // console.log(data[0])
                this.zhoudata = data[0];
            })
            fetch(url1,{
            method:'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'play_id='+this.id
            }).then(response => response.json())
            .then((data)=>{
                data.map((item,index)=>{
                    item.start_time = item.start_time.slice(11,16);
                })
                let xxx = data.findIndex(item=>item.sch_id==this.sch_id);
                this.zhoudata1 = data[xxx];
                // console.log(data[xxx])
            })
            
        },
        //-1  座位出问题
        // 0  可选座位
        // 1  已选座位
        // 2  已购票座位
        initSeatArray:function(){
            let seatArray = Array(this.seatRow).fill(0).map(()=>Array(this.seatCol).fill(0));
            this.seatArray = seatArray;
            this.initNonSeatPlace();
        },
        initNonSeatPlace:function(){
            // this.seatArray[2][3] = 2;
            // this.seatArray[3][3] = 2;
            // this.seatArray[2][4] = 2;
            // this.seatArray[5][5] = 2;
            this.selected.forEach((item=>{
                // console.log(item.row,item.col);
                this.seatArray[item.row-1][item.col-1] = 2;
            }))

        },
        handleChooseSeat:function(x,y){
            this.ok++;
            console.log(this.num);
            let seatValue = this.seatArray[x][y];
            // let newArray = this.seatArray;
            if(seatValue===2)return 
            if(seatValue===1){
                // newArray[x][y]=0;
                let onum = this.selectTicket.findIndex(item=>item.row==x+1&&item.col==y+1);
                    this.remove(onum);
                
            }else if(seatValue === 0){   
                this.num++;
                if(this.num>4){
                    alert('单人最多选择四个座位');
                    this.num--;
                    return 
                }
                // newArray[x][y]=1;
                this.selectTicket.push({row:x+1,col:y+1,id:this.ok});
            }
            // this.seatArray = newArray.slice(); 
        },
        remove:function(onum){
            this.selectTicket.splice(onum,1);
            this.num--;
        },
        sendmsg:function(){
            // fetch(url3,{
            //     method:'POST',
            //     headers: {
            //     'Content-Type': 'application/json'
            //     },
            //     body:JSON.stringify({
            //         sch_id:this.sch_id,
            //         selectTicket:this.selectTicket
            //     })
            //     }).then(response => response.JSON())
            //     .then((data)=>{
            //         console.log(data);
            // })
            this.$http.post(url3,{
                user_id:store.state.userId,
                sch_id:this.sch_id,
                selectTicket:this.selectTicket
            }).then((data)=>{
                alert(data.body.msg);
                this.$router.push('/home');
            })
        }

    },
    watch:{
        selectTicket:function(){
            this.initSeatArray();
            let newArray = this.seatArray;
            this.selectTicket.forEach(item=>{
                newArray[item.row-1][item.col-1] = 1;
            })
        },
        selected:function(){
            this.initSeatArray();
        }
    }
}
</script>

<style scoped>
    .unselected-seat{
        background: url('../assets/img/unselected.png') center center no-repeat;
        background-size: auto 88%;
    }
    .selected-seat{
        background: url('../assets/img/selected.png') center center no-repeat;
        background-size: auto 88%;
    }
    .bought-seat{
        background: url('../assets/img/bought.png') center center no-repeat;
        background-size: auto 88%;
    }
    .ticket {   
        width: 1000px;
        height: 600px;
        margin: 50px auto;
        min-width: 1000px;
        border: 1px solid rgba(207, 203, 203, .5);
        display: flex;
    }
    .left{
        width: 680px;
        box-sizing: border-box;
        padding: 20px;
        
        display: flex;
    }
    .left .coulmn{
        width: 60px;
        margin-top: 50px;
        list-style-type: none;
    }
    .left .coulmn li{
        width: 16px;
        height: 16px;
        text-align: center;
        border-radius: 50%;
        background-color: #AEAEAE;
        line-height: 16px;
        /* box-sizing: border-box; */
        margin-top: 20px;
    }
    .left .coulmn li:nth-of-type(1){
        margin-top: 10px;
    }
    .right {
        flex: 1;
    }
    .leftUp{
        height: 460px;
    }
    .seatTitle{
        width: 580px;
        height: 50px;
    }
    .seatTitle p{
        width: 100%;
        text-align: center;
        font-size: 16px;
        margin: 0;
    }
    s{
        display: block;
        background: url('./../assets/img/back.png');
        height: 30px;
    }
    .seatbody{
        width: 100%;
        height: 370px;
        /* background-color:aliceblue; */
        overflow-y:scroll;
        text-align: center;
    }
    .seatbody::-webkit-scrollbar{
        display: none;
    }
    .inner-Seat{
        width: 100%;
        height: 100%;
    }
    .leftDown{
        border-top: 1px solid rgba(207, 203, 203, .5);
    }
    .leftDown .seatChooseInfor{
        height: 100px;
        /* background-color:aliceblue; */
    }
    .clearfix{
        height: 28px;
        display: flex;
    }
    .clearfix li{
        vertical-align: middle;
        list-style-type: none;
        flex: 1;
    }
    .clearfix li span{
        vertical-align: -5px;
        display: inline-block;
        width: 26px;
        height: 25px;
    }
    .seatChooseInfor p{
        text-align: center;
        font-size: 12px;
    }

/* 右边的 */
    .right{
        box-sizing: border-box;
        padding: 20px 0 0 20px;
        background-color: #FFF5F5;
        max-width: 320px;
    }
    .rightUp{
        padding: 0 10px 20px 0;
        height: 115px;
        display: flex;
    }
    .rightUp .oimage{
        width: 80px;
        height: 113px;
    }
    .rightUp .oimage img{
        width: 100%;
        height: 100%;
    }
    .rightUp .msg{
        flex: 1;
        padding: 0 0 0 10px;
        font-size: 14px;
    }
    .rightUp .msg div:nth-of-type(1){
        font-weight: 700;
        padding: 5px;
    }
    .rightUp .msg div:nth-of-type(n+2){
        padding: 5px;
        color: #666;
    }
    .rightDown .place,.ting,.once{
        font-size: 14px;
        color: #9a9a9a;
        height: 35px;
    }
    .rightDown span{
        font-size: 16px;
    }
    .place span,.ting span{
        font-weight: bold;
        color: #3e3e3e;
    }
    .once span{
        color: #eb002a;
        font-weight: bold;
    }
    .rightDown .oseat .piao{
        margin-top: 10px;
        display: flex;
        flex-wrap:wrap;
    }
    .rightDown .oseat{
        font-size: 14px;
        color: #9a9a9a;
        min-height: 70px;
    }
    .rightDown .oseat .xiaopiao{
        width: 48px;
        height: 26px;
        color: #eb002a;
        font-size: 12px;
        background-color: #fff;
        margin: 0px 24px 10px 0;
        padding: 0 5px;
        border: 1px solid #eb002a;
        line-height: 26px;
    }
    .jiage{
        height: 70px;
        border-top: 1px solid rgba(207, 203, 203, .5);
        border-bottom: 1px solid rgba(207, 203, 203, .5);
        display: flex;
        flex-direction:column;
        justify-content: space-between;
    }
    .jiage .yuanjia,.allplace{
        top: 5px;
        font-size: 14px;
        color: #9a9a9a;
        padding: 5px 0;
    }
    .xiadan{
        width: 155px;
        height: 42px;
        font-size: 14px;
        color: #fff;
        background-color: #eb002a;
        margin: 40px 0 0;
        line-height: 42px;
        text-align: center;
    }
</style>