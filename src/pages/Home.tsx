import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='homepage'>
      <Header />
      <div className='hero-section'>
        <p className='para-title'>Guardians of the Digital Realm: Fortifying Your Future Online</p>
        <p className='para-desc'>
            Navigating the Ever-Evolving Digital Landscape: Your Trusted Partner in 
            Cybersecurity, Offering Cutting-Edge Solutions to Safeguard Your Online 
            Presence and Fortify Your Digital Legacy Against Emerging Threats.
        </p>
      </div>
      <div className='services'>
        <p>What We Do</p>
        <div className='services-container'>
            <div className='service'>
                <p className='service-title'>
                    Security Infrastruture
                </p>
                <p className='service-desc'>
                   Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim. 
                </p>
            </div>
            <div className='service'>
                <p className='service-title'>
                    Network Intrusion Detection Systems
                </p>
                <p className='service-desc'>
                   Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim. 
                </p>
            </div>
            <div className='service'>
                <p className='service-title'>
                    Firewalls
                </p>
                <p className='service-desc'>
                   Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim. 
                </p>
            </div>
            <div className='service'>
                <p className='service-title'>
                    Web Application Security
                </p>
                <p className='service-desc'>
                   Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim. 
                </p>
            </div>
            <div className='service'>
                <p className='service-title'>
                    Penetration Testing
                </p>
                <p className='service-desc'>
                   Ullamco sint veniam fugiat voluptate duis. Velit nisi commodo amet reprehenderit fugiat occaecat laborum. Aliquip laboris nisi ex fugiat enim. Mollit esse esse ullamco pariatur irure duis eiusmod anim. 
                </p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
