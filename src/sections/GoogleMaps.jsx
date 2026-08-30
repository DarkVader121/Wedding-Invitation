const GoogleMaps = () => {

    return (
        <>
        <section className="wi-googleMaps !pt-0 ">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.6510951862365!2d123.86250351566784!3d9.625771323791682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa52ba3fd77b6b%3A0x690d380544e2214f!2sChurch%20of%20Our%20Lady%20of%20the%20Assumption%20(Dauis%20Church)!5e0!3m2!1sen!2sph!4v1788062361870!5m2!1sen!2sph"
            
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Dauis Church location"
            />
        
        </section>
      </>
    );
}

export default GoogleMaps;