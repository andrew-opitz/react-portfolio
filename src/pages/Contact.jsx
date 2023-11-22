function Contact () {
    return (
        <>
        <h1 className="text-center mt-5">Contact</h1>

        <section >

        <form className="d-flex special flex-column align-items-center justify-content-center"> 
        <div className="mt-4">
        <p>Name:</p>
        <input type="text" placeholder="Enter your name" />
        </div>

        <div className="mt-4">
        <p>Email:</p>
        <input type="text" placeholder="Enter your email" />
        </div>

        <div className="mt-4">
        <p>Message:</p>
        <textarea  id="message" className="form-control" rows="5" placeholder="Enter your message"></textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
        </section>
        </>
    )
}
export default Contact