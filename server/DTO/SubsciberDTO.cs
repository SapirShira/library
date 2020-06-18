using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class SubsciberDTO
    {
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string address { get; set; }
        public string phon { get; set; }
        public string email { get; set; }
        public Nullable<System.DateTime> startDate { get; set; }
        public Nullable<int> type { get; set; }
        public Nullable<bool> isDeleted { get; set; }
    }
}
