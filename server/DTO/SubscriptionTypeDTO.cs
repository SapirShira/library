using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class SubscriptionTypeDTO
    {
        public int codeType { get; set; }
        public Nullable<int> numOfBooks { get; set; }
        public Nullable<int> price { get; set; }
        public string status { get; set; }
    }
}
