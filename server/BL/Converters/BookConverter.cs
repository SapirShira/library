using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class BookConverter
    {
        public static BookDTO ConvertBookToDTO(Book book)
        {
            return new BookDTO
            {
                codeBook=book.codeBook,
                name = book.name,
                codAauthor = book.codAauthor,
                codeCategory = book.codeCategory,
                codeCrowd = book.codeCrowd,
                date = book.date,
                isDeleted = book.isDeleted,
                numOtakim = book.numOtakim,
                category=book.Category.nameCategory,
                author=book.Aauthor.LiteraryAlias,
                crowd=book.Crowd.nameCrowd

            };
        }

        public static Book ConvertBookDTOToDAL(BookDTO book)
        {
            return new Book
            {
                name = book.name,
                codAauthor = book.codAauthor,
                codeCategory = book.codeCategory,
                codeCrowd = book.codeCrowd,
                date = book.date,
                isDeleted = book.isDeleted,
                numOtakim = book.numOtakim
            };
        }

        public static List<BookDTO> ConvertBookListToDTO(List<Book> book)
        {
            return book.Select(a => ConvertBookToDTO(a)).ToList();
        }
    }
}
