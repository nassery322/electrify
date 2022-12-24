import './Home.css'
import NavBar from '../Navbar/NavBar'
const Home = props =>{

return <div className='home'>
          <NavBar />
        <div className='home-header'><h2>Electrify </h2></div>
        <div className='home-quote'>Electronics shape today's Modern World!</div>
        <div className='home-message'>Our E-Commerce website provides the best Available products in the Market</div> 
</div>
}

export default Home;