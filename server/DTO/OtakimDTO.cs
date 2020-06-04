using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class OtakimDTO
    {
        public int codeOtek { get; set; }
        public Nullable<int> Serial { get; set; }
        public Nullable<int> codeBook { get; set; }
        public Nullable<int> price { get; set; }
        public string status { get; set; }
    }
}
