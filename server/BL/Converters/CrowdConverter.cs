using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class CrowdConverter

    {
        public static CrowdDTO ConvertCrowdToDTO(Crowd crowd)
        {
            return new CrowdDTO
            {
                codeCrowd=crowd.codeCrowd,
                nameCrowd = crowd.nameCrowd
            };
        }

        public static Crowd ConvertCrowdDTOCToDAL(CrowdDTO crowd)
        {
            return new Crowd
            {
                nameCrowd = crowd.nameCrowd
            };
        }

        public static List<CrowdDTO> ConvertCrowdListToDTO(List<Crowd> crowd)
        {
            return crowd.Select(a => ConvertCrowdToDTO(a)).ToList();
        }
    }
}


