// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});

function confirmDelete() {
  if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
    alert("Data telah dihapus."); 
  } else {

  }
}