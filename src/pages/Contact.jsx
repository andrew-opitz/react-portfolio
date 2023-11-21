function Contact () {
    return (
        <>
        <h1 className="text-center mt-5">Contact me</h1>
        <form className="d-flex flex-column align-items-center justify-content-center"> 
        <div className=" mt-5 mb-4">
        <label htmlFor="name" className="form-label">
            Name
        </label>
        <input type="text" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
        <label htmlFor="email" className="form-label">
            Email
        </label>
        <input type="text" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
        <label htmlFor="message" className="form-label">
            Message
        </label>
        <textarea  id="message" className="form-control" rows="5" placeholder="Enter your message"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    )
}
export default Contact