import React , { useState, lazy, Suspense } from "react";
import Style from './Services.module.css';
import webdesign from './../../img/Webdesign.png'
import camera from './../../img/camera.jpg'
import classes from './../../img/class.jpg'
import male_avatar from './../../img/my_avatar.png'
import val_avatar from './../../img/val_avatar.jpg'
import larissa_avatar from './../../img/larissa.png'
import automation_bot_img from './../../img/automation.png'


import { Link } from 'react-router-dom'

const Form = lazy(() => import('./../Forms/Form'));

const Services = () =>{
  let [toggle, togleService] = useState(false)
  let [toggleBot, togleBot] = useState(false)

  let [service, changeService] = useState()
  let botClass = toggleBot ? Style.displayBotVisible : Style.nothing
  let servicesClass = toggle ? Style.displayServicesVisible : Style.nothing

  const handleScroll = (con, id) => {
    const element = document.getElementById(id)
    return con ? element.scrollIntoView({behavior:"smooth"}) : null
  }
  const handleClick = (event) =>{
    let answer = event.currentTarget.id
    
    if (answer === "Automation-bots"){
        if (!toggleBot){
          handleScroll(true,"botText")
        }
       
        togleBot(current => !current) 
    }else if(answer === "formOne"){
      changeService(answer)
      if(!toggle){
        handleScroll(true,"form1")
      }
      
      togleService(current => !current) 
    }else{
        changeService(answer)
        if(!toggle){
          handleScroll(true,"services")
        }
        
        togleService(current => !current) 
    }
    
  }



  let form = toggle ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Form name={service} />
    </Suspense>
  ) : null
  let botText = toggleBot ? (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={Style.autobotText}>
        <div className={Style.Video}>
          <iframe src="https://www.youtube.com/embed/9_LO3h71bCs?si=bFyXh1YHCAeOXT0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h2>Automate Tedious Tasks with Custom Bots</h2>
        <p>In today’s fast-paced world, we all encounter repetitive tasks that drain valuable time and energy. Whether it’s logging into platforms to update files, manually reviewing spreadsheets, or double-checking data entries, these mundane chores can pull your team away from more important, creative, and strategic work.</p>
        
        <p><strong>But what if there was a better way?</strong></p>
        
        <p>With our custom automation bots, you can say goodbye to those repetitive tasks and focus on what truly matters. Our bots are designed to handle the busywork for you—no manual intervention needed. Whether you’re updating records, checking data, or managing workflows across platforms, our bots streamline the process, saving you time and reducing human error.</p>
        
        <h2>How Does It Work?</h2>
        <ol>
            <li><strong>Free Consultation:</strong> We start with a free consultation, where you explain exactly what tasks you want to automate. We’ll take the time to understand your specific needs and pain points.</li>
            <li><strong>System Review:</strong> Next, we discuss the software and platforms you use, determining how our bot will seamlessly integrate and interact with your existing systems.</li>
            <li><strong>Custom Solution & Estimate:</strong> Based on the scope of the automation, we provide you with a detailed estimate for the cost and timeline of the project.</li>
            <li><strong>Build & Launch:</strong> Once you give us the green light, our team gets to work building your custom bot. We handle everything, from design to testing, ensuring a smooth deployment that makes your day-to-day operations easier.</li>
        </ol>
        
        <h2>Why Choose Automation?</h2>
        <ul>
            <li><strong>Increased Efficiency:</strong> Our bots work tirelessly around the clock, ensuring tasks are completed quickly and accurately without breaks or downtime.</li>
            <li><strong>Cost Savings:</strong> By automating repetitive tasks, you free up your team’s time for higher-value activities, which boosts productivity and, ultimately, your bottom line.</li>
            <li><strong>Error Reduction:</strong> Manual processes are prone to mistakes. Automation minimizes human error, leading to more consistent and reliable outcomes.</li>
            <li><strong>Scalability:</strong> Whether you need to automate one task or a dozen, our bots are flexible and scalable, adapting as your business grows.</li>
        </ul>

        <p>Free up your team’s time, improve efficiency, and focus on what really drives your business forward. <span id="formOne" onClick={handleClick} className={Style.ctaButton}>Book your free consultation today</span> and discover how automation can transform your workflow.</p>
          <div id="services" className={Style.displayServiceContainer}>
            <div id="form1" className={servicesClass}>
                {form}
            </div>
        </div>
      </div>
    </Suspense>
  ) : null

  
  return (
    <div className={Style.services}>
      {/* Existing Services Section */}
      <div className={Style.serviceHeader}>
        <h1>Services I can help you with</h1>
      </div>

      {/* SaaS: Automation Bots Section */}
      <div className={Style.serviceHeader}>
        <h2>Software as a Service (SaaS)</h2>
      </div>
      <div className={Style.container}>
        <div id="Automation-bots" onClick={handleClick} className={Style.box}>
          <div className={Style.box_img}>
            <img src={automation_bot_img} alt="Automation bots"></img> {/* Add appropriate image */}
          </div>
          <div className={Style.box_text}>
            <h2>Automation Bots</h2>
            <p>Do you want to save time and streamline your business processes? I offer custom-built automation bots designed to help you automate repetitive tasks, freeing you to focus on more important aspects of your work.</p>
            
          </div>
        </div>
      </div>
      <div id="botText" className={Style.displayServiceContainer}>
        <div className={botClass}>
            {botText}
        </div>
    </div>
      <div className={Style.container}>
        <div id="Free-lance webdesign" onClick={handleClick} className={Style.box}>
          <div className={Style.box_img}>
            <img src={webdesign} alt="webdesign"></img>
          </div>
          <div className={Style.box_text}>
            <h2>Free-lance Webdesign</h2>
            <p>If you are looking for a website, or would like to renew, change or improve the user experience of your website, I would love to hear about it and help you out</p>
          </div>
        </div>
        <div id="Coding tutorial" onClick={handleClick} className={Style.box}>
          <div className={Style.box_img}>
            <img src={classes} alt="coding classes"></img>
          </div>
          <div className={Style.box_text}>
            <h2>Beginner level Programming tutoring</h2>
            <p>If you are a beginner or have interest in getting started with the fundamentals of programming, I would love to help you get started</p>
          </div>
        </div>
        <div id="Photography" onClick={handleClick} className={Style.box}>
          <div className={Style.box_img}>
            <img src={camera} alt="photography camera"></img>
          </div>
          <div className={Style.box_text}>
            <h2>Photography</h2>
            <p>If you have a special event coming up, or need some great pictures for your portfolio, we've got you covered</p>
          </div>
        </div>
      </div>
  
      <div id="services" className={Style.displayServiceContainer}>
        <div className={servicesClass}>
            {form}
        </div>
    </div>
  
      {/* Existing Team Section */}
      <div className={Style.serviceHeader}>
        <h1>The Team</h1>
      </div>
      <div className={Style.workWithContainer}>
        <div className={Style.box_prof}>
          <div className={Style.box_prof_img_container}>
            <div className={Style.box_prof_img}>
              <img src={larissa_avatar} alt="Larissa Arnold"></img>
            </div>
          </div>
          <div className={Style.box_prof_name}>
            <h2>Larissa Arnold</h2>
          </div>
          <div className={Style.box_text}>
            <h3>UX/UI Designer</h3>
            <p>Design has always been present in my life in a very intuitive way. Then I discovered how UX design matters and its importance in retaining attention</p>
            <p><a href="https://www.behance.net/larissaarnold">Check out my projects</a></p>
          </div>
        </div>
  
        <div className={Style.box_prof}>
          <div className={Style.box_prof_img_container}>
            <div className={Style.box_prof_img}>
              <img src={val_avatar} alt="Valorie"></img>
            </div>
          </div>
          <div className={Style.box_prof_name}>
            <h2>Valerie Ni Raigne</h2>
          </div>
          <div className={Style.box_text}>
            <h3>Photographer</h3>
            <p>I Buzz with Mother Nature, life is all about capturing the moments</p>
            <p><a href="https://instagram.com/photoworks77?igshid=YmMyMTA2M2Y=">Check out my Instagram</a></p>
          </div>
        </div>
  
        <div className={Style.box_prof}>
          <div className={Style.box_prof_img_container}>
            <div className={Style.box_prof_img}>
              <img src={male_avatar} alt="Samuel Finnegan"></img>
            </div>
          </div>
          <div className={Style.box_prof_name}>
            <h2>Sam Finnegan</h2>
          </div>
          <div className={Style.box_text}>
            <h3>Programmer</h3>
            <p>As a Full-stack developer, I love finding problems so I can come up with a solution.</p>
            <Link to='/about'><p>About Me</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Services