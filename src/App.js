import Card from './components/card';
import './App.css';

function App() {

  let cardsData = [
    {
      title: "ST-200 HIGH BASS, HANDSFREE",
      img: "https://static-01.daraz.pk/p/cf9a45356e37e8b5496c09382789ff28.jpg",
      description: "Product details of ST-200 HIGH BASS, JETT BLACK HANDSFREE, WITH TWO EXTRA EARPLUGS PAIR"
    },
    {
      title: "Slim 2500mAh Power Bank",
      img: "https://static-01.daraz.pk/p/7c91bd165b7eeea573aa518cc0933ae6.jpg",
      description: "We offer quality imported full battery 2500 mAhUltra Slim Credit Card type Power BanK 2500 mAh"
    },
    {
      title: "Latest M5 Smart Fitness",
      img: "https://static-01.daraz.pk/p/93eceef8327e91fe480cadf4c534f050.png",
      description: "Heart rate monitor, Call and SMS reminder, Camera, Lift or turn over your hands, light up screen"
    },
    {
      title: "Mini Speaker Bluetooth Extra",
      img: "https://static-01.daraz.pk/p/5f569321be909df4fec2944c38bd2aa8.jpg",
      description: "Model BT10 Bluetooth speaker Mainly function: Bluetooth(V4.0), TF card, AUX, Calls AnswerMaterial"
    },
    {
      title: "Silicon Pop It Fidget Toy POP",
      img: "https://static-01.daraz.pk/p/8d9560e5f7cefd430fa10f3949ac9899.png",
      description: "Product details of Silicon Pop It Fidget Toy POP Bubble Squeeze Sensory Fidget Toys Pop It Toy"
    },
    {
      title: "Creative Powerful Seamless Soap",
      img: "https://static-01.daraz.pk/p/7313e31494385e326009d6bf8d3ec034.jpg",
      description: "We're on a campaign to reduce the use of plastic, hope to ultimately eradicate the world"
    }
  ]


  return (
    <div className="container">
      <div className="row">
          {cardsData.map((item, index) =>{
            return (
              <div className="col s12 m6 l4" key={index} >
                <Card title={item.title} img={item.img} description={item.description} />
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default App;
