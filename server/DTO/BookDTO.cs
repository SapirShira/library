using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class BookDTO
    {
        public int codeBook { get; set; }
        public string name { get; set; }
        public Nullable<int> codAauthor { get; set; }
        public string author { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public Nullable<int> codeCategory { get; set; }
        public string category { get; set; }
        public Nullable<int> codeCrowd { get; set; }
        public string crowd { get; set; }
        public Nullable<bool> isDeleted { get; set; }
        public Nullable<int> numOtakim { get; set; }
        public Nullable<double> price { get; set; }
    }
}
