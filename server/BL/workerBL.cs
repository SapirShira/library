using DAL;
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
    public class workerBL
    {
        public static bool addWorker(WorkerDTO s)
        {
            using (libraryEntities db = new libraryEntities())
            {

                string mailBody = $" Hi " + s.name + " You have successfully joined our team  \n " +
                            $"your password is " + s.password + " \n Thanks ";
                if (db.Workers.FirstOrDefault(x => x.idWorker == s.idWorker) != null)
                {
                    s.status = true;
                    updateWorker(s);
             
                }
                else
                { 
                    db.Workers.Add(Converters.WorkerConverter.ConvertWorkerDTOToDAL(s));
                    //bool b = SendMail(s.address, "ברוכים הבאים לצוות עובדנו", mailBody);

                }
                try
                {
                    db.SaveChanges();
                    bool b = SendMail(s.address, "ברוכים הבאים לצוות עובדנו", mailBody);
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }

            }
        }


        public static bool updateWorker(WorkerDTO a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Worker au = db.Workers.First(x => x.idWorker == a.idWorker);
                au.name = a.name;
                au.status = a.status;
                au.address = a.address;
                au.phone = a.phone;
                au.password = a.password;
                au.typeWork = a.typeWork;


                try
                {
                    db.SaveChanges();
                    bool b = SendMail(a.name, "ברוכים הבאים לצוות עובדנו", "פרטיך עודכנו בהצלחה במערכת ");
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }

            }
        }


        public static bool deleteWorker(int a)
        {
            using (libraryEntities db = new libraryEntities())
            {
                Worker au = db.Workers.First(x => x.idWorker == a);

                au.status = false;

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



        public static List<WorkerDTO> GetWorkerById(int code)
        {
            using (libraryEntities db = new libraryEntities())
            {
                List<WorkerDTO> t = Converters.WorkerConverter.ConvertWorkerListToDTO(db.Workers.Where(x => x.idWorker == code).ToList());
                return t;
            }
        }


        public static List<WorkerDTO> GetWorkers()
        {
            using (libraryEntities db = new libraryEntities())
            {
                return Converters.WorkerConverter.ConvertWorkerListToDTO(db.Workers.Where(a => a.status == true).ToList());

            }
        }


        public static bool SendMail(string mailAdrress, string title, string mailBody)
        {
            //try
            //{
            //    SmtpClient client = new SmtpClient("smpt.gmail.com", 587);
            //    MailMessage message = new MailMessage();
            //    message.From = new MailAddress("the.book.we.loved@gmail.com");
            //    message.To.Add("shirahalili78@gmail.com");
            //    message.Body = "בדיקה";
            //    message.Subject = "בדיקה";
            //    client.UseDefaultCredentials = false;
            //    client.EnableSsl = true;
            //    client.Credentials = new System.Net.NetworkCredential("the.book.we.loved@gmail.com", "book5252?");
            //    client.Send(message);
            //    message = null;
            //    return true;
            //}
            //catch (Exception s)
            //{
            //    return false;

            //}

            //$" Hi shira halili You have successfully joined our club card. \n " +
            //        $"We hope meet you again soon \n Thanks ";
            try
            {



                var fromAddress = new MailAddress("the.book.we.loved@gmail.com", "The Book We Loved");
                var toAddress = new MailAddress(mailAdrress, "To Name");
                const string fromPassword = "book5252?";
                string subject = title;
                var smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                };
                using (var message = new MailMessage(fromAddress, toAddress)
                {
                    Subject = subject,
                    Body = mailBody
                })

                    smtp.Send(message);



                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }


    }




           



        // the.book.we.loved@gmail.com
        //book5252?


    }

