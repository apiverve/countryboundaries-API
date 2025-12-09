using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.CountryBoundaries
{
    /// <summary>
    /// Query options for the Country Boundaries API
    /// </summary>
    public class CountryBoundariesQueryOptions
    {
        /// <summary>
        /// The Country 2 Letter ISO code (e.g., CA)
        /// Example: CA
        /// </summary>
        [JsonProperty("country")]
        public string Country { get; set; }
    }
}
