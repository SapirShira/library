﻿using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Net;

namespace BL
{
    public class lendingBL
    {
        public static bool addLending(LendingDTO l)
        {
            using (libraryEntities db = new libraryEntities())
            {
                db.Lendings.Add(Converters.LendingConverter.ConvertLendingDTOToDAL(l)) ;
                try
                {
                    db.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }

            }
        }

        public static List<LendingDTO> GetLendings()
        {
            using (libraryEntities db = new libraryEntities())
            {
                return Converters.LendingConverter.ConvertLendingListToDTO(db.Lendings.ToList());
            }
        }


        //public static void sentEmail()
        //{
        //    var fromAddress = new MailAddress("the.book.we.loved@gmail.com", "הספרים שאהבנו");
        //    var toAddress = new MailAddress(user.user_email, "To Name");
        //    const string fromPassword = "thebookweloved";
        //    const string subject = "הינך מאחר בהחזרת ספרים לסיפרייה";
        //    string body = "שלום  " + user.user_firsname + Environment.NewLine +" הינך מתבקש להחזיר את הספרים בהקדם";


        //    var smtp = new SmtpClient
        //    {
        //        Host = "smtp.gmail.com",
        //        Port = 587,
        //        EnableSsl = true,
        //        DeliveryMethod = SmtpDeliveryMethod.Network,
        //        UseDefaultCredentials = false,
        //        Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
        //    };
        //    using (var message = new MailMessage(fromAddress, toAddress)
        //    {
        //        Subject = subject,
        //        Body = body
        //    })
        //    {
        //        smtp.Send(message);
        //    }
        //}

    }
}
