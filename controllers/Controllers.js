const Event = require("../model/Event.js");

exports.getEventById = async (req, res) => {
  try {
    
    const eventId = req.params.id;
    // console.log(eventId)
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get event', error });
  }
};


exports.getLatestEvents = async (req, res) => {
    const { type, limit, page } = req.query;
    const skip = (page - 1) * limit;
    console.log(req.query)
    try {
     const events = await  Event.find()
      .sort({ schedule: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      
      res.status(202).send(events);
    } catch (error) {
      res.status(500).send(err);
    } 
};

exports.createEvent = async (req, res) => {
  

   
  try {
    
   
    const event = new Event(req.body);
    await event.save();

    res.json({ id: event._id });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to create event', error });
  }
};

exports.updateEvent = async (req, res) => {
    const eventId = req.params.id;
    console.log(eventId)
    try {
     
   
      const updatedEvent = await Event.findByIdAndUpdate(
        eventId,
        req.body
      );
      if (!updatedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json(updatedEvent);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update event', error });
    }
  };
  

  exports.deleteEvent = async (req, res) => {
    try {
      const eventId = req.params.id;
      const deletedEvent = await Event.findByIdAndDelete(eventId);
      if (!deletedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json({ message: 'Event deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete event', error });
    }
  };
  


