        <%
        String start = request.getParameter("start");
        String limit = request.getParameter("limit");
        String sort = request.getParameter("sort");
        String dir = request.getParameter("dir");
        if(!dir){
                dir ="ASC";
        }
        try{
            int index = Integer.parseInt(start);
            int pageSize = Integer.parseInt(limit);
            String json = "{totalProperty: 100, root: [";
            if(dir.equalsIgnoreCase("asc")){
                for(int i = index; i < index + pageSize; i++){
                        json +=   "{id: " + i + ", name: 'name " + i + "', descn: 'descn" + i + "'}" ;
                        if(i != index + pageSize -1){
                             json += ",";
                        }
                }
            }else{
                 for(int i = index+ pageSize; i > index; i--){
                        json += "{id: " + i + ", name: 'name" + i +"',descn: 'descn" + i +"'}";
                        if(i != index + 1){
                             json += ",";
                        }
                 }
            }
            json += "]}";
            response.getWriter().write(json);
        } catch(Exception e){
        }
        %>