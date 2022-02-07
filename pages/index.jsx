
import React from 'react'
import MoIndex from "../components/MoIndex";

export default function Home() {
  return (
    <article className="main">
    <div className="homePCWrap">
{/* <MoIndex /> */}
<div className="home-left">
<ul className="left-stamp">
<li> <img src="img/main-stamp.png" /> <span>CONTENT</span> </li>
<li> <img src="img/main-stamp.png" /><span>CONTENT</span> </li>
<li> <img src="img/main-stamp.png" /> <span>CONTENT</span></li>
</ul>

<li className="left-stamping"> <img src="img/stamping.png" /> </li>
</div>

<div className="home-middle">

<div className="middle-row">
<li className="row-ac1"> <img src="img/ac1.png" />  </li>
<li className="row-ac2"> <img src="img/ac2.png" /> </li>
</div>
</div>

<div className="home-right">
<li className="right-twitter"> <img src="img/twitter.png" /> </li>
<li className="right-kirring"> <img src="img/kirring.png" /> </li>
<li className="right-search"> <img src="img/search.png" /> </li>
<li className="right-newspaper"> <img src="img/newspaper.png" /> </li>
</div>
    </div>



    <div className="homeMobileWrap">
     <li><img src="img/mo-schedule.png" /></li>
     <h4>메인 페이지는 모바일에 최적화되어있지 않습니다 그치만 컨텐츠는 열람하실 수 있도록 아래 링크를 마련했으니 접속이 가능합니다~!</h4>
    </div>
</article>    
  );
}
