const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    uid: {
      type: Number,
      
    },
    name: {
      type: String,
      
    },
    tagline: {
      type: String,
     
    },
    schedule: {
      type: Date,
    
    },
    description: {
      type: String,
     
    },
    files: {
      image: {
        type: String,
       
      },
    },
    moderator: {
      type: String,
      
    },
    category: {
      type: String,
    
    },
    sub_category: {
      type: String,
      
    },
    rigor_rank: {
      type: Number,
    
    },
    attendees: {
      type: [Number],
      default: [],
    },
  },
  { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
