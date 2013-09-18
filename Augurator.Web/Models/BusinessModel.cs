using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Augurator.Web.Models
{
    public enum MeridianModel
    {
        AM,
        PM
    }

    public class BusinessModel
    {
        public BusinessModel(string name, string formattedAddress, MeridianModel pickupTime)
        {
            Name = name;
            FormattedAddress = formattedAddress;            
            PickupTime = pickupTime;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string FormattedAddress { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public MeridianModel PickupTime { get; set; }
    }
}