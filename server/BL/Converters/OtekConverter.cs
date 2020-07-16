using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class OtekConverter
    {
        public static OtakimDTO ConvertOtakimToDTO(Otakim otek)
        {
            return new OtakimDTO
            {
                codeOtek=otek.codeOtek,
                codeBook = otek.codeBook,
                Serial = otek.Serial,
                price = otek.price,
                status=otek.status,
                bookName=otek.Book.name
            };
        }

        public static Otakim ConvertOtakimDTOToDAL(OtakimDTO otek)
        {
            return new Otakim
            {
                codeBook = otek.codeBook,
                Serial = otek.Serial,
                price = otek.price,
                status = otek.status
            };
        }

        public static List<OtakimDTO> ConvertOtakimListToDTO(List<Otakim> otek)
        {
            return otek.Select(a => ConvertOtakimToDTO(a)).ToList();
        }
    }
}
