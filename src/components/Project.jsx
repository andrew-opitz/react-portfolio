import tech from '../assets/tech_blog.png'
import savings from '../assets/rainydaysavings.png'
import prepAir from '../assets/prepair.png'
function Project () {
    return (
        <>
      <section className='d-flex flex-row  align-items-center justify-content-around mt-3'>
        <div>
             <h1 className='text-decoration-underline mt-4'>Tech blog</h1>
          <a href="https://fast-mountain-02352-8fa18822945e.herokuapp.com/">
            <img className="img-fluid w-75 me-2" src={tech} alt="Tech Blog" />
          </a>
          <a href="https://github.com/andrew-opitz/tech_blog">
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>

        <div>
          <h1 className='text-decoration-underline mt-4'>Rainy Day Savings</h1>
          <a href="https://warm-sierra-48394-43a7b3f089e9.herokuapp.com/">
            <img className="img-fluid w-75 me-2" src={savings} alt="Rainy Day Savings" />
          </a>
          <a href="https://github.com/pwoodkotch/Rainy_Day_Savings">
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>

        <div>
          <h1 className='text-decoration-underline mt-4'>PrepAir</h1>
          <a href="https://pwoodkotch.github.io/prepAir_project01_app/">
            <img className="img-fluid w-75" src={prepAir} alt="PrepAir" />
          </a>
          <a href="https://github.com/pwoodkotch/prepAir_project01_app">
          <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>
       
      </section>
        </>
    )
}
export default Project