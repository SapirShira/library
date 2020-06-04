using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class AuthorConverter
    {
        public static AuthorDTO ConvertAuthorToDTO(Aauthor auther)
        {
            return new AuthorDTO 
            {
                firstName = auther.firstName,
                lastName = auther.lastName,
                LiteraryAlias = auther.LiteraryAlias
            };
        }

        public static Aauthor ConvertAuthorDTOToDAL(AuthorDTO auther)
        {
            return new Aauthor
            {
                firstName = auther.firstName,
                lastName = auther.lastName,
                LiteraryAlias = auther.LiteraryAlias
            };
        }

        public static List<AuthorDTO> ConvertAuthorListToDTO(List<Aauthor> auther)
        {
            return auther.Select(a => ConvertAuthorToDTO(a)).ToList();
        }
    }
}

