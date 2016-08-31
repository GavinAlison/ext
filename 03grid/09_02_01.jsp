        <%
        String start = request.getParameter("start");
        String limit = request.getParameter("limit");
        try{
            int index = Integer.parseInt(start);
            int pageSize = Integer.parseInt(limit);
            String json = "{totalProperty: 100, root: [";
            for(int i = index; i < index + pageSize; i++){
                json +=   "{id: " + i + ", name: 'name " + i + "', descn: 'descn" + i + "'}" ;
                if(i != index + pageSize -1){
                     json += ","
                }
            }
            json += "]}";
            response.getWriter().write(json);
        } catch(Exception e){
        }
        %>