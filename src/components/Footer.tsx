import classes from '../assets/styles/footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={classes["footer-bg"]}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={classes["footer-logo"]}>Mock Shop</div>
              <div className='text-center'>&copy; {`Mock Shop ${new Date().getFullYear()}`}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
