//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Lending
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Lending()
        {
            this.LendingItems = new HashSet<LendingItem>();
        }
    
        public int codeLending { get; set; }
        public Nullable<int> idSubscribers { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public Nullable<int> worker { get; set; }
        public Nullable<System.DateTime> expectReturnDate { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LendingItem> LendingItems { get; set; }
        public virtual Subscriber Subscriber { get; set; }
        public virtual Worker Worker1 { get; set; }
    }
}
