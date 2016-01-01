<% for (var i = 0; i < items.length; i ++) {
  var item = items[i]
%>
- [<%= item.title %>](<%= item.url %>) （<%= item.name %>）
  <% if (item.overview) { %>
  ><%= item.overview %>
  <% } %>
<% } %>