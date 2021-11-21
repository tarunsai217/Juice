import React from 'react';
import styles from './Main.module.css';
import Card from '../SharedComponents/Card'
import ProductSection from '../ProductSection/ProductSection';

function Main() {
    return (
        <>
    <section className={styles.mainSection}>

        <div className={styles.mainContainer}>

        <div className={styles.mainImage} ><img  ALT="MAINIMAGE" src="https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2020/02/about_icon.png"></img></div>
        <div className={styles.heading}> <h2>Fresh Juice</h2></div>
        <div className={styles.subheading}><h5>GOOD FOR NATURAL. GOOD FOR YOU.</h5></div>

        </div>

    </section>




    <section className={styles.submain}>
      <div className={styles.subcontainer} >
          <div className={styles.child1}>
              <div><img alt="leaf " src="https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2020/02/separator.png"></img></div>
              <div><h2 style={{fontSize:'40px',fontWeight:'600',letterSpacing:'2.5px'}}>Only Natural Ingredients</h2></div>
              <div><h5>We Use Best Quality Products For Our Juices</h5></div>
          </div>
          <div className={styles.child2}>
                  <div className={styles.cardContainer}>
                      <Card title='100% Natural' right={false} />
                      <Card title='Always Fresh' right={false}/>
                  </div>
                  <div className={styles.child2Image}><img alt='plant' src="https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2020/02/home2.png" class="attachment-large size-large"></img></div>   
                  <div className={styles.cardContainer}>
                      <Card title='Organic Products' right={true}/>
                      <Card title='Best Quality' right={true}/>
                  </div>
          </div>
      </div>
    </section>




    <section className={styles.products}>
       <div className={styles.headingContainer}>
           <div><img alt='leaf' src="https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2020/02/separator.png" ></img></div>
           <div><h2>Smoothies & Juices</h2></div>
           <div><h5>You Have a Choice</h5></div>
           <ProductSection/>
       </div>
       
    </section>





    <section className={styles.description}> 
    <div className={styles.descriptionChild1}>
        <div><img alt='basket' src='https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2020/02/home3.png'></img></div>
         <div className={styles.descriptionChild1Content}> 
             <h1>From The Best Farm To Your Table</h1>
             <h5>Get 50% off On This Month</h5>
             <p>Lorem ipsum dolor sit amet, conc Lorem sit amet, concLorem ipsum dolor aliquam quaerat voluptatem.</p>
             <button>READ MORE</button>
         </div>
    </div>
    <div className={styles.descriptionChild2}>

         <div className={styles.descriptionChild2Content}> 
             <h1>Drink The Life Like A Glass Of Juice</h1>
             <p>Nventore Veritatis Et Quasi Architecto Beatae Dicta Sun Explicabo. Nemo Enim Ipsam Volup Tatemarchitecto Volup A Sit Aspernatur.Explicabo.</p>
             <button>SHOP NOW</button>
         </div>
         <div><img alt='basket' src='https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2020/02/about.jpg'></img></div>
     
    </div>

    </section>






    <section className={styles.author}>
    
    </section>





    <section className={styles.review}>
    <div className={styles.headingContainer}>
           <div><img alt='leaf' src="https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2020/02/separator.png" ></img></div>
           <div><h2>Smoothies & Juices</h2></div>
           <div><h5>Learn About Some Useful Facts</h5></div>
    </div>
    <div className={styles.reviewContainer}>
    <div className={styles.reviewChild1}>
        <div className={styles.reviewImageContainer}><img alt='review' src='https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2019/03/blog1.jpg'/></div>
        <div className={styles.reviewDescription}>  
         <h3>Unique Recipes To Spice Up Your Smoothie (Literally)</h3>
         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
         </div>
    </div>
    <div className={styles.reviewChild2}>
       <div  style={{paddingRight:'20px'}} className={styles.reviewDescription}> 
        <h3>Unique Recipes To Spice Up Your Smoothie (Literally)</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
       </div>
       <div className={styles.reviewImageContainer}> <img alt='review' src='https://live-demo.wooskins.com/themes/ws-juice/wp-content/uploads/2019/03/blog2.jpg'/>  </div>
    </div>
    </div>
    </section>


    <section className={styles.footer}>
    <div className={styles.footerContainer}>

        <div className={styles.aboutUs}>
            <h2>About Ws Juice</h2>
            <p> In varius varius justo, eget ultrices mauris rhoncus non. Morbi tristique, mauris eu imperdiet bibendum, velit diam iaculis velit, in ornare massa enim at lorem. Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus, estibulum tincidunt . </p>
        </div>


        <div className={styles.categoriesBlog}> 
            <h2>Categories Blog</h2>
            <ul> 
                <li>Fresh Squeezed Juices (3)</li>
                <li>Nature’s Energy Shots (2)</li>
                <li>Our News (4)</li>
                <li>Power Juices (2)</li>
                <li>Simply Juice (2)</li>
            </ul>
        </div>


        <div className={styles.contactUs}>
        <h2>Get In Touch</h2>    
         <span className={styles.address}>262 Milacina Mrest Street Behanced,United State</span>
         <span className={styles.phone}>3333 6789</span>
         <span className={styles.email}> support@yoursiteurl.com</span>
         <span className={styles.website}> www.yoursiteurl.com </span>
        </div>  
    </div>
    </section>
    </>
    )
}

export default Main
