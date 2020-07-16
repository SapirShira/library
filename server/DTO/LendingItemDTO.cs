using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class LendingItemDTO
    {
        public int codeLending { get; set; }
        public int codeOtek { get; set; }
        public string bookName { get; set; }
        public string comment { get; set; }
        public Nullable<System.DateTime> returnDate { get; set; }
    }
}
