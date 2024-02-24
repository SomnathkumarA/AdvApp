import events from '../../images/events.png'
import NavbarPage from './Nav';
const AboutUsPage = () => {
  return (
    
    <div style={{ display: 'flex', padding: '20px',textAlign:'justify' }}>
        <NavbarPage/>

      {/* Left side */}
      <div style={{ flex: '1',color:'white', marginRight: '20px', paddingRight: '20px', borderRight: '1px solid #ccc', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto' }}>
        <h2>About Us</h2>
        <p>Welcome to [Your Company Name], where we specialize in transforming corporate visions into remarkable realities. With a keen eye for detail, boundless creativity, and unwavering dedication, we have been at the forefront of the event management industry for [X years]. Our journey is one of passion, precision, and the relentless pursuit of excellence.

Established in [Year], [Your Company Name] was born from a simple yet powerful idea: to redefine the landscape of corporate events. We recognized the need for a fresh approach, one that seamlessly blends innovation with efficiency, to deliver unparalleled experiences that leave a lasting impression.

At [Your Company Name], we understand that every event tells a unique story. Whether its a product launch, a gala dinner, a conference, or a team-building retreat, we believe in tailoring each experience to reflect the essence of our clients brands. Our dedicated team of event architects works tirelessly to bring these visions to life, from conceptualization to execution.

What sets us apart is our unwavering commitment to excellence in every aspect of our work. From the initial consultation to the final curtain call, we prioritize client satisfaction above all else. We believe in the power of collaboration, working closely with our clients every step of the way to ensure that their vision is realized beyond expectation.

Creativity is at the heart of everything we do. Our team of seasoned professionals brings a wealth of diverse perspectives and talents to the table, allowing us to approach each project with fresh eyes and innovative ideas. Whether its designing immersive environments, curating bespoke entertainment, or orchestrating seamless logistics, we strive to exceed the ordinary and embrace the extraordinary.

At [Your Company Name], we also understand the importance of staying ahead of the curve in an ever-evolving industry. Thats why we invest in continuous learning and innovation, keeping abreast of the latest trends and technologies to deliver cutting-edge experiences that captivate and inspire.

But perhaps what we are most proud of is the relationships we have built along the way. 




</p>
      </div>
      {/* Right side */}
      <div style={{ flex: '1', marginLeft: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <img src={events} alt="Image 1" style={{ width: '100%', marginBottom: '10px' }} />
          
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
