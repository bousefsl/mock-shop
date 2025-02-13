//Images
import { Link } from 'react-router-dom';
import HeroImg from '../assets/images/hero.jpg';
//Styles
import classes from '../assets/styles/hero.module.css';

export default function Hero() {
  return (
    <div className={classes["hero-container"]} style={{backgroundImage: `url(${HeroImg})`}}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className='row'>
              <div className='col-sm-8 col-lg-5'>
                <div className={classes["msg-container"]}>
                  <h1 className='text-white'>Lorem ipsum sit amet consectetur</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio eum eligendi quaerat magni ratione est perferendis fugit tempore!</p>
                  <Link to='/products' className='btn btn-primary'>Our Products</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
