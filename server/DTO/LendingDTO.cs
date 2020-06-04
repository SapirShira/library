using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class LendingDTO
    {
        public int codeLending { get; set; }
        public Nullable<int> idSubscribers { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public Nullable<int> worker { get; set; }
        public Nullable<System.DateTime> expectReturnDate { get; set; }

    }
}
