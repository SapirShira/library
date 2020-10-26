using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class newLendingDitaile
    {
        public int code { get; set; }
        public List<LendingItemDTO> lendingItemsToSub { get; set; }
    }
}
