

const CatagoriesList = () => {
    return (
        <div className="mt-32">
           <div>
             <h6 className="text-3xl font-bold">Host Engaging Online and Venue Events with EventEase</h6>
            <p className="mt-4">Organise venue events and host online events with unlimited possibilities using our built-in virtual event platform.Build a unique event experience for you and your attendees.</p>
           </div>
      <div className="flex justify-between gap-8 mt-24 mb-20  grid grid-cols-1 lg:grid-cols-3 md:gap-5 lg:gap-8">
               <div className="card bg-base-100  shadow-sm">
  <figure>
    <img className="w-30 h-30 mb-4 "
      src="https://i.ibb.co.com/1J47vFdy/video-call.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold mb-4">Online Event</h2>
    <p>Built-in video conferencing paltform to save you time and cost.</p>
   
  </div>
</div>
       <div className="card bg-base-100  shadow-sm">
  <figure>
    <img className="w-30 h-30 mb-4"
      src="https://i.ibb.co.com/FfXg9fF/pin.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold mb-4">Venue Event</h2>
    <p>Easy-to-use features to create and manage your venue events.</p>
   
  </div>
</div>
       <div className="card bg-base-100  shadow-sm">
  <figure>
    <img className="w-30 h-30 mb-4 "
      src="https://i.ibb.co.com/WppGqLhf/ticket.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold mb-4">Engaging Event page</h2>
    <p>Create engaging event pages with your logo and our hero image collage gallery.</p>
   
  </div>
</div>
       <div className="card bg-base-100  shadow-sm">
  <figure>
    <img className="w-30 h-30 mb-4 "
      src="https://i.ibb.co.com/5X80DJFV/marketing-automation.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold mb-4">Marketing Automation</h2>
    <p>Use our marketing automation tools to promote your events on social media and email.</p>
   
  </div>
</div>
      </div>

        </div>
    );
};

export default CatagoriesList;