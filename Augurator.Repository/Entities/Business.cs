using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Augurator.Repository.Entities
{
    public enum Meridian 
    {
        AM,
        PM
    }

    public class Location 
    {
        private Location() { }

        public Location(double latitude, double longitude)
	    {
            Latitude = latitude;
            Longitude = longitude;
	    }

        public double Longitude { get; private set; }
        public double Latitude { get; private set; }
    }

    public class Business
    {
        private Business() { }

        public Business(string name, string formattedAddress, Location location, Meridian pickupTime)
        {
            Name = name;
            FormattedAddress = formattedAddress;
            Location = location;
            PickupTime = pickupTime;
        }

        public int Id { get; set; }
        public string Name { get; private set; }
        public string FormattedAddress { get; private set; }
        public Location Location { get; private set; }
        public Meridian PickupTime { get; private set; }
    }
}
