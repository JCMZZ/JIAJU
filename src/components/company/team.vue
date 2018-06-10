<template>
  <div>
    <img style="filter:opacity(0.8)" src="/static/img/company/team/team-bg.jpg" alt="">
    <transition>
      <div v-if="show" class="company-team">
        <div>
          <h1>团队核心</h1>
          <h4>TECHNOLOGY CORE TEAM</h4>
        </div>
        <div>
          <ul :style="'transform:translate('+translate+'px)'">
            <li v-for="(value,index) in 6" :key="value">
              <img @mouseover="stop(index)" @mouseout="move" :class="{companyTeamActive:isActive==index}" :src="'/static/img/company/team/designer'+value+'.jpg'" alt="">
            </li>
          </ul>
        </div>
        <div>
          <h4>人物简介</h4>
          <p class="companyText">{{txt}}</p>
        </div>
        <img src="/static/img/company/team/stimulate.png" alt="">
      </div>
    </transition>
  </div>
</template>
<script>
  import jq from '../../assets/js/fade'
  export default {
    name:'team',
    props:['show'],
    data(){
      return{
        isActive:5,
        translate:0,
        txt:'',
        timer:null,
        timer1:null
      }
    },
    methods:{
      watch(){
        this.isActive>=3 &&(this.translate=-640);
        this.isActive>5 &&(this.isActive=0);
        this.isActive==0 &&(this.translate=0);
        this.text();
      },
      change(){
        this.isActive++;
        this.watch();
        this.timer = setTimeout(this.change,5000);
      },
      move(){
        this.timer1 = setTimeout(()=>{
          this.change();
        },5000)
      },
      stop(index){
        clearTimeout(this.timer);
        clearTimeout(this.timer1);
        this.timer = null;
        this.timer1 = null;
        this.isActive = index;
        this.isActive==2 &&(this.translate=0);
        this.watch();
      },
      text(){
        this.isActive == 0 &&(
          this.txt = `阿尔瓦·阿尔托(1898-1976)是芬兰现代建筑师,人情化建筑理论的倡导者，同时也是一位设计大师及艺术家。1947年阿尔瓦·阿尔托获美国普林斯顿大学名誉美术博士学位,1955年阿尔瓦·阿尔托当选芬兰科学院院士。1957年获英国皇家建筑师学会金质奖章,1963年阿尔瓦·阿尔托获美国建筑师学会金质奖章。`
        );
        this.isActive == 1 &&(
          this.txt = `马克思·比尔(Max Bill，1908～1994)是具体艺术的杰出代表。 克思·比尔是瑞士"苏黎世具体艺术"团体的成员之一，也是这一团体的创始人之一，他认为具体艺术是："努力用可感觉和可触知的形式再现抽象的思想"。比尔对数学与艺术之间的关系进行过深刻的研究，他认为：无论是有意识或无意识的安排，绘画或雕塑都与数学有着密切的联系，他坚持把康定斯基和马列维奇的精神作为具体艺术的根源。他甚至要求艺术的创作原则应该处于一定的数学规律之下，这样，才能确保其创作原则的可操控性。他认为，数学规律是艺术的一种必需的援助，只有通过数学规律，艺术家纯粹的心理世界才能最终获得其艺术语言的形式外衣。`
        );
        this.isActive == 2 &&(
          this.txt = `罗恩·阿拉德(Ron Arad),是著名的设计师、建筑师以及是个出色的老师，1951年出生于以色列的特拉维夫，他的父母都是艺术家，一生设计了非常多的作品，闻名以家具设计界和建筑界，Ron Arad 一直是坚持以不锈钢、铝和聚酰胺作为主材料，所以后来才产生了Ron氏风格，Ron氏风格流行了一段时期，当时那个时期设计界和建筑界很多著名的设计师都不断像Ron Arad学习，他对建筑形式和家具结构进行重新构思，这也使得Ron Arad成为现代设计的先驱者。除了他工作室的限量版设计，他还为很多大型国际公司设计产品，这些公司包括Kartell、Vitra、Moroso、Driade、Cappellini、Cassina、Magis 等。`
        );
        this.isActive == 3 &&(
          this.txt = `盖·奥兰蒂(Gae Aulenti)1927 年12月4日出生于意大利 Palazzolo dello Stello ，她曾在米兰工艺学校( Milan Polytechnic School )学习建筑， 1954 年毕业后，在米兰创立了自己的事务所。她曾在欧洲的许多地方讲学。奥兰蒂将建筑视为独特的存在于城市环境中的实体，将建筑和城市环境联系在一起。在其设计作品中，她将私密的和公众的空间结合在一起，营造整体的意境，认为建筑师应当注意新建筑维持城市的风格。其他声名显赫的意大利建筑师一样，她接手项目的类型很广，工业设计和室内设计等众多项目都有涉及。在其后期的作品中，她的设计领域已由家居 / 陈列室转向大型的综合项目。`
        );
        this.isActive == 4 &&(
          this.txt = `马里奥·贝里尼(Mario Bellini)事业起步于上世纪六十年代，从担任Olivetti工业项目负责人开始，后来又担任其他意大利企业和国际企业的顾问（如Vitra、 Cassina、Artemide、Driade、Flou），使意大利设计风格在国外获得了很高的认知度，为地中海式创作赢得声誉。多个系列作品都被纽约现代艺术博物馆永久收藏，并多次获得金罗盘（Compasso d’Oro）大奖。对综合类设计的娴熟把握能力，使他有多次机会担任世界大型展览的设计总监。在漫长的职业生涯中，不仅致力于日常生活用品的设计，还参与了很多大型城市项目，显示出其创作的多面性和多产性。最近的作品包括：墨尔本国家胜利画廊（National Gallery of Victoria）的扩建工程和米兰Portello della Fiera社区的设计。在工业设计领域的作品有Heller 的The Bellini Chair座椅系列，为B&B Italia设计的Vol-au-vent座椅系列和为Cassina设计的Bull椅。其它合作过的企业还有：Acerbis International、Brionvega、Ideal standard、ìGuzzini、Natuzzi、 Poltrona Frau、Smeg.`
        );
        this.isActive == 5 &&(
          this.txt = `马里奥·博塔(MARIOBOTTA) 1943年，出生在瑞士门德里西奥（Mendrisio）。博塔中学辍学，15岁起就从事建筑设计工作，后在卢加诺（Lugano）跟随Cnenisch和Carloni进行建筑设计等方面的学习。1964 年，他通过了艺术学院的入学考试，当年秋，他开始在威尼斯建筑大学学习。1969年，他遇到了几位在建筑行业有重大影响的著名设计师，包括：路易·艾瑟铎·康（Louis I.Kahn）、卡洛·斯卡派（Carlo Scarpa）和Giuseppe Mazzariol 。同年，他结束了学业并在瑞士卢加诺创建了自己的办公室。`
        );
      }
    },
    updated(){
      jq.default('.company-team>div:nth-child(1)>h1').textillate({
        initialDelay:380,
        in: { effect:'fadeInLeftBig', delay:100},
      });
      jq.default('.company-team>div:nth-child(1)>h4').textillate({
        initialDelay:400,
        in: { effect:'fadeInLeftBig',delay:50}
      });
    },
    mounted(){
      this.change();
    },
    watch:{
      show(){
        if(this.show){
          clearTimeout(this.timer);
          this.timer = null;
          clearTimeout(this.timer1);
          this.timer1 = null;
          this.change();
        }
      }
    }
  }
</script>
<style>
  .company-team{
    background:rgba(0,0,0,0.1);
  }
  .company-team>div{
    position: absolute;
  }
  .company-team>div:nth-child(1){
    width:220px;
    height:80px;
    top:40px;
    left:30px;
  }
  .company-team>div:nth-child(1)>h1{
    margin-bottom:15px;
    visibility: hidden;
    color:rgb(85, 218, 24);    
  }  
  .company-team>div:nth-child(1)>h4{
    visibility: hidden;
    color:rgb(211, 15, 15);
  } 
  .company-team>div:nth-child(2){
    width:1280px;
    height:320px;
    position: absolute;
    opacity:0;
    top:120px;
    right:0;
    bottom:auto;
    margin:auto;
    overflow: hidden;
    animation: teamContent .8s ease-in-out .6s forwards;
  } 
  @keyframes teamContent {
    0%{left:-100px;opacity:0;}
    50%{left:30px;opacity:1;}
    100%{left:0;opacity:1;}
  }
  .company-team>div:nth-child(2)>ul{
    transition:all .8s ease-in-out;
    width:1920px;
    height:320px;
  }
  .company-team>div:nth-child(2)>ul>li{
    box-sizing:border-box;
    width:320px;
    height:320px;
    line-height:320px;
    padding-top:10px;
    display: inline-block;
  } 
  .company-team>div:nth-child(2)>ul>li>img{
    border-radius:50%;
    filter:opacity(60%) grayscale(100%);
    cursor: pointer;
  }
  .companyTeamActive{
    box-shadow:0 0 10px 6px black !important;
    filter:opacity(1) sepia(0) !important;
  } 
  .company-team>div:nth-child(3){
    bottom:10px;
    top:auto;
    left:0;
    right:0;
    margin: auto;
    width:90%;
    height:180px;
    opacity:0;
    animation: teamContentText .8s ease-in-out .6s forwards;
  }   
  @keyframes teamContentText {
    0%{bottom:-100px;opacity:0;}
    50%{bottom:40px;opacity:1;}
    100%{bottom:10px;opacity:1;}
  }
  .company-team>div:nth-child(3)>h3{
    margin-bottom:20px;
  } 
  .company-team>div:nth-child(3)>p{
    text-align:left;
    padding:10px;
  }  
  .companyText{
    text-indent:30px;
  } 
  .company-team>img:last-child{
    position: absolute;
    top:-30px;
    right:0;
    z-index:-1;
    transform: rotate(5deg);
    opacity:.6;
    animation: teamStimulate .6s ease-in-out .6s forwards;
  }
  @keyframes teamStimulate {
    0%{top:-80px;opacity:0;}
    50%{top:0;opacity:.6;}
    100%{top:-30px;opacity:.6;}
  }
</style>
