export default function() {
  return [
    {
      title: "Dashboard",
      to: "/employeeDashboard",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
    {
      title: "view Test Details",
      htmlBefore: '<i class="material-icons">visibility</i>',
      to: "/viewTests",
    },
    {
      title: "Book Appointment",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/employee-book-appointment",
    },
    {
      title: "Appointment History",
      htmlBefore: '<i class="material-icons">description</i>',
      to: "/employee-appointment-history",
    },
   
  ];
}
