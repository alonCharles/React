const Footer = () => {
    let today = new Date()
    return (
       <footer className="container">
        <div className="row justify-content-center mt-3 mb-4">
            <div className="col-8">
                <h5>Team Member Distribution App - {today.getFullYear()}</h5>
            </div>
        </div>
        
       </footer>
    )
}

export default Footer