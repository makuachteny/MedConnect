// SIDEBAR TOGGLE
var sidebarOpen=false;
var sidebar=document.getElementById( "sidebar" );

function openSidebar() {
    if ( !sidebarOpen ) {
        sidebarOpen.classList.add( "sidebar-responsive" )
        sidebarOpen=true;
    }
}
function closeSidebar() {
    if ( sidebarOpen ) {
        sidebarOpen.classList.remove( "sidebar-responsive" )
        sidebarOpen=false;
    }
function openSidebar() {
  // Add your code to open the sidebar here
}

function performSearch() {
  const searchInput = document.getElementById('search-input');
  const searchText = searchInput.value;
  alert(`You searched for: ${searchText}`);
}
