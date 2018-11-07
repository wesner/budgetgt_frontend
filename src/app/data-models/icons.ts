/**
 * @author wesner
 * @date Noviembre 2018
 * Clase que exporta los iconos para los listados de cada item
 */

export class Icons{
     
     getIconType():string{
          return "data:image/svg+xml;utf8;base64,";
     }
     

     getIconData(type:string):string{
          switch (type) { //account, category, fixedExpense, fixedIncome, creditCard, debt, income, expense
               case 'account':     return this.getIconAccount();
               case 'category':    return this.getIconCategory();
               case 'fixedExpense':return this.getIconExpense();
               case 'fixedIncome': return this.getIconIncome();
               case 'creditCard':  return this.getIconCreditCard();
               case 'debt':        return this.getIconDebt();
               case 'income':      return this.getIconIncome();               
               case 'expense':     return this.getIconExpense();
               default:            return "";
          }
     }

     /**
      * <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/smashicons" title="Smashicons">Smashicons</a> desde <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a> con licencia <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      */
     getIconCreditCard():string{
          return "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU4IDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OCA1ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnIGlkPSJYTUxJRF83XyI+Cgk8cGF0aCBpZD0iWE1MSURfMTMwXyIgc3R5bGU9ImZpbGw6IzZCQkVBMTsiIGQ9Ik01NC43ODMsNTBIMy4yMTdDMS40MzksNTAsMCw0OC41NiwwLDQ2Ljc4M1YxMS4yMTdDMCw5LjQ0LDEuNDM5LDgsMy4yMTcsOGg1MS41NjYgICBDNTYuNTYsOCw1OCw5LjQ0LDU4LDExLjIxN3YzNS41NjZDNTgsNDguNTYsNTYuNTYsNTAsNTQuNzgzLDUwIi8+Cgk8cmVjdCBpZD0iWE1MSURfMTI5XyIgeD0iNSIgeT0iMzciIHN0eWxlPSJmaWxsOiM0OTg2Nzk7IiB3aWR0aD0iOSIgaGVpZ2h0PSI2Ii8+Cgk8cmVjdCBpZD0iWE1MSURfMTI4XyIgeD0iMTgiIHk9IjM3IiBzdHlsZT0iZmlsbDojNDk4Njc5OyIgd2lkdGg9IjkiIGhlaWdodD0iNiIvPgoJPHJlY3QgaWQ9IlhNTElEXzEyN18iIHg9IjMxIiB5PSIzNyIgc3R5bGU9ImZpbGw6IzQ5ODY3OTsiIHdpZHRoPSI5IiBoZWlnaHQ9IjYiLz4KCTxyZWN0IGlkPSJYTUxJRF8xMjZfIiB4PSI0NCIgeT0iMzciIHN0eWxlPSJmaWxsOiM0OTg2Nzk7IiB3aWR0aD0iOSIgaGVpZ2h0PSI2Ii8+Cgk8cGF0aCBpZD0iWE1MSURfMTI1XyIgc3R5bGU9ImZpbGw6I0YwQzQxQjsiIGQ9Ik0xOS43NDUsMjZINi4yNTVDNS41NjMsMjYsNSwyNS40MzgsNSwyNC43NDV2LTkuNDlDNSwxNC41NjIsNS41NjMsMTQsNi4yNTUsMTQgICBoMTMuNDlDMjAuNDM4LDE0LDIxLDE0LjU2MiwyMSwxNS4yNTV2OS40OUMyMSwyNS40MzgsMjAuNDM4LDI2LDE5Ljc0NSwyNiIvPgoJPHBhdGggaWQ9IlhNTElEXzEyMl8iIHN0eWxlPSJmaWxsOiNGM0Q1NUM7IiBkPSJNMTkuNzQ1LDI3SDYuMjU1QzUuMDEyLDI3LDQsMjUuOTg4LDQsMjQuNzQ1di05LjQ5QzQsMTQuMDEyLDUuMDEyLDEzLDYuMjU1LDEzICAgaDEzLjQ5QzIwLjk4OCwxMywyMiwxNC4wMTIsMjIsMTUuMjU1djkuNDlDMjIsMjUuOTg4LDIwLjk4OCwyNywxOS43NDUsMjcgTTYuMjU1LDE1QzYuMTEzLDE1LDYsMTUuMTE0LDYsMTUuMjU1djkuNDkgICBDNiwyNC44ODYsNi4xMTMsMjUsNi4yNTUsMjVoMTMuNDlDMTkuODg2LDI1LDIwLDI0Ljg4NiwyMCwyNC43NDV2LTkuNDlDMjAsMTUuMTE0LDE5Ljg4NiwxNSwxOS43NDUsMTVINi4yNTV6Ii8+Cgk8cGF0aCBpZD0iWE1MSURfMTIxXyIgc3R5bGU9ImZpbGw6I0YwQzQxQjsiIGQ9Ik0yMSwxNS4yNTVDMjEsMTQuNTYxLDIwLjQzOCwxNCwxOS43NDUsMTRIMTVoLTIuNzQ1QzExLjU2MSwxNCwxMSwxNC41NjEsMTEsMTUuMjU1ICAgVjE4djYuNzQ1QzExLDI1LjQzOCwxMS41NjEsMjYsMTIuMjU1LDI2aDEuNDlDMTQuNDM4LDI2LDE1LDI1LjQzOCwxNSwyNC43NDV2LTUuNDlDMTUsMTguNTYyLDE1LjU2MSwxOCwxNi4yNTUsMThoMy40OSAgIEMyMC40MzgsMTgsMjEsMTcuNDM4LDIxLDE2Ljc0NVYxNS4yNTV6Ii8+Cgk8cGF0aCBpZD0iWE1MSURfMTE4XyIgc3R5bGU9ImZpbGw6I0YzRDU1QzsiIGQ9Ik0xMy43NDUsMjdoLTEuNDlDMTEuMDEyLDI3LDEwLDI1Ljk4OCwxMCwyNC43NDV2LTkuNDkgICBDMTAsMTQuMDEyLDExLjAxMiwxMywxMi4yNTUsMTNoNy40OUMyMC45ODgsMTMsMjIsMTQuMDEyLDIyLDE1LjI1NXYxLjQ5QzIyLDE3Ljk4OCwyMC45ODgsMTksMTkuNzQ1LDE5aC0zLjQ5ICAgQzE2LjExMywxOSwxNiwxOS4xMTQsMTYsMTkuMjU1djUuNDlDMTYsMjUuOTg4LDE0Ljk4OCwyNywxMy43NDUsMjcgTTEyLjI1NSwxNUMxMi4xMTMsMTUsMTIsMTUuMTE0LDEyLDE1LjI1NXY5LjQ5ICAgQzEyLDI0Ljg4NiwxMi4xMTMsMjUsMTIuMjU1LDI1aDEuNDlDMTMuODg2LDI1LDE0LDI0Ljg4NiwxNCwyNC43NDV2LTUuNDlDMTQsMTguMDEyLDE1LjAxMiwxNywxNi4yNTUsMTdoMy40OSAgIEMxOS44ODYsMTcsMjAsMTYuODg2LDIwLDE2Ljc0NXYtMS40OUMyMCwxNS4xMTQsMTkuODg2LDE1LDE5Ljc0NSwxNUgxMi4yNTV6Ii8+Cgk8bGluZSBpZD0iWE1MSURfMTE3XyIgc3R5bGU9ImZpbGw6I0YwQzQxQjsiIHgxPSIxNSIgeTE9IjIyIiB4Mj0iMjEiIHkyPSIyMiIvPgoJPHBhdGggaWQ9IlhNTElEXzExNl8iIHN0eWxlPSJmaWxsOiNGM0Q1NUM7IiBkPSJNMjEsMjNoLTZjLTAuNTUzLDAtMS0wLjQ0OC0xLTFzMC40NDctMSwxLTFoNmMwLjU1MywwLDEsMC40NDgsMSwxUzIxLjU1MywyMywyMSwyMyAgICIvPgoJPGxpbmUgaWQ9IlhNTElEXzExNV8iIHN0eWxlPSJmaWxsOiNGMEM0MUI7IiB4MT0iMTEiIHkxPSIxOCIgeDI9IjUiIHkyPSIxOCIvPgoJPHBhdGggaWQ9IlhNTElEXzExNF8iIHN0eWxlPSJmaWxsOiNGM0Q1NUM7IiBkPSJNMTEsMTlINWMtMC41NTMsMC0xLTAuNDQ4LTEtMXMwLjQ0Ny0xLDEtMWg2YzAuNTUzLDAsMSwwLjQ0OCwxLDFTMTEuNTUzLDE5LDExLDE5Ii8+Cgk8bGluZSBpZD0iWE1MSURfMTEzXyIgc3R5bGU9ImZpbGw6I0YwQzQxQjsiIHgxPSIxMSIgeTE9IjIyIiB4Mj0iNSIgeTI9IjIyIi8+Cgk8cGF0aCBpZD0iWE1MSURfMTEyXyIgc3R5bGU9ImZpbGw6I0YzRDU1QzsiIGQ9Ik0xMSwyM0g1Yy0wLjU1MywwLTEtMC40NDgtMS0xczAuNDQ3LTEsMS0xaDZjMC41NTMsMCwxLDAuNDQ4LDEsMVMxMS41NTMsMjMsMTEsMjMiLz4KCTxwYXRoIGlkPSJYTUxJRF8xMTFfIiBzdHlsZT0iZmlsbDojNDk4Njc5OyIgZD0iTTQwLDEzaC05Yy0wLjU1MywwLTEsMC40NDgtMSwxczAuNDQ3LDEsMSwxaDljMC41NTMsMCwxLTAuNDQ4LDEtMVM0MC41NTMsMTMsNDAsMTMgICAiLz4KCTxwYXRoIGlkPSJYTUxJRF8xMTBfIiBzdHlsZT0iZmlsbDojNDk4Njc5OyIgZD0iTTU0LDE0YzAtMC41NTItMC40NDctMS0xLTFoLTljLTAuNTUzLDAtMSwwLjQ0OC0xLDFzMC40NDcsMSwxLDFoOSAgIEM1My41NTMsMTUsNTQsMTQuNTUyLDU0LDE0Ii8+Cgk8cGF0aCBpZD0iWE1MSURfMTA5XyIgc3R5bGU9ImZpbGw6IzQ5ODY3OTsiIGQ9Ik0zMiwxOGgtMWMtMC41NTMsMC0xLDAuNDQ4LTEsMXMwLjQ0NywxLDEsMWgxYzAuNTUzLDAsMS0wLjQ0OCwxLTFTMzIuNTUzLDE4LDMyLDE4ICAgIi8+Cgk8cGF0aCBpZD0iWE1MSURfMTA4XyIgc3R5bGU9ImZpbGw6IzQ5ODY3OTsiIGQ9Ik0zOCwxOGgtMmMtMC41NTMsMC0xLDAuNDQ4LTEsMXMwLjQ0NywxLDEsMWgyYzAuNTUzLDAsMS0wLjQ0OCwxLTFTMzguNTUzLDE4LDM4LDE4ICAgIi8+Cgk8cGF0aCBpZD0iWE1MSURfMTA3XyIgc3R5bGU9ImZpbGw6IzQ5ODY3OTsiIGQ9Ik00MywxOGgtMWMtMC41NTMsMC0xLDAuNDQ4LTEsMXMwLjQ0NywxLDEsMWgxYzAuNTUzLDAsMS0wLjQ0OCwxLTFTNDMuNTUzLDE4LDQzLDE4ICAgIi8+Cgk8cGF0aCBpZD0iWE1MSURfMTA2XyIgc3R5bGU9ImZpbGw6IzQ5ODY3OTsiIGQ9Ik00OSwxOGgtMmMtMC41NTMsMC0xLDAuNDQ4LTEsMXMwLjQ0NywxLDEsMWgyYzAuNTUzLDAsMS0wLjQ0OCwxLTFTNDkuNTUzLDE4LDQ5LDE4ICAgIi8+Cgk8cGF0aCBpZD0iWE1MSURfMTA1XyIgc3R5bGU9ImZpbGw6IzQ5ODY3OTsiIGQ9Ik01Mi4yOSwxOC4yOUM1Mi4xMDksMTguNDgsNTIsMTguNzQsNTIsMTljMCwwLjI2LDAuMTA5LDAuNTIsMC4yOSwwLjcxICAgQzUyLjQ3OSwxOS44OSw1Mi43MjksMjAsNTMsMjBjMC4yNiwwLDAuNTE5LTAuMTEsMC43MS0wLjI5QzUzLjg5LDE5LjUyLDU0LDE5LjI2LDU0LDE5YzAtMC4yNi0wLjExLTAuNTItMC4yOS0wLjcxICAgQzUzLjMzLDE3LjkyLDUyLjY2LDE3LjkyLDUyLjI5LDE4LjI5Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";
     }

     getIconAccount():string{
          return "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU4IDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OCA1ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVFMzExODsiIHBvaW50cz0iNDEuNTI4LDUuODg0IDU1LDE5LjM1NiA1NC40NzIsMTkuODg0IDU4LDE5Ljg4NCA1OCw1Ljg4NCAgICIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiM1RTMxMTg7IiBkPSJNMjQuMTc0LDUuODg0SDdjLTMuODY2LDAtNywzLjEzNC03LDdzMy4xMzQsNyw3LDdoNC4yM2wtMC41MjgtMC41MjhMMjQuMTc0LDUuODg0eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6Izc3NDQyQjsiIGQ9Ik0xNi41NDMsOC4zNjdjLTAuNjQxLDAuMDQ4LTEuMjk4LDAuMDgtMS45NjEsMC4xMDRjLTAuNTUyLDAuMDItMC45ODMsMC40ODMtMC45NjMsMS4wMzUgICAgYzAuMDIsMC41NCwwLjQ2MywwLjk2NCwwLjk5OCwwLjk2NGMwLjAxMywwLDAuMDI0LDAsMC4wMzctMC4wMDFjMC42ODgtMC4wMjQsMS4zNzEtMC4wNTksMi4wMzctMC4xMDggICAgYzAuNTUxLTAuMDQxLDAuOTY0LTAuNTIxLDAuOTIzLTEuMDcxUzE3LjA5NSw4LjMyNCwxNi41NDMsOC4zNjd6Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6Izc3NDQyQjsiIGQ9Ik0xMC41ODgsOC41NjljLTAuNjk2LDAuMDItMS4zNzksMC4wNDUtMi4wMzQsMC4wODZjLTAuNTUyLDAuMDM0LTAuOTcxLDAuNTA5LTAuOTM3LDEuMDYgICAgYzAuMDMzLDAuNTMsMC40NzMsMC45MzgsMC45OTcsMC45MzhjMC4wMjEsMCwwLjA0Mi0wLjAwMSwwLjA2My0wLjAwMmMwLjYzNC0wLjAzOSwxLjI5My0wLjA2NCwxLjk2Ni0wLjA4MiAgICBjMC41NTItMC4wMTYsMC45ODctMC40NzUsMC45NzMtMS4wMjdTMTEuMTI0LDguNTk1LDEwLjU4OCw4LjU2OXoiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojNzc0NDJCOyIgZD0iTTQuMzU5LDkuMzE5Yy0wLjkwNywwLjI5Ny0xLjYwMiwwLjY5NC0yLjEyLDEuMjEzYy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0ICAgIGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M2MwLjI4OC0wLjI4NywwLjczNC0wLjUzMiwxLjMyOS0wLjcyNyAgICBjMC41MjQtMC4xNzIsMC44MTEtMC43MzYsMC42MzktMS4yNjJDNS40NSw5LjQzNCw0Ljg4OSw5LjE0Niw0LjM1OSw5LjMxOXoiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojNzc0NDJCOyIgZD0iTTUwLDguODg0aC0yYy0wLjU1MywwLTEsMC40NDctMSwxczAuNDQ3LDEsMSwxaDJjMC41NTMsMCwxLTAuNDQ3LDEtMVM1MC41NTMsOC44ODQsNTAsOC44ODR6Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6Izc3NDQyQjsiIGQ9Ik01Niw4Ljg4NGgtMmMtMC41NTMsMC0xLDAuNDQ3LTEsMXMwLjQ0NywxLDEsMWgyYzAuNTUzLDAsMS0wLjQ0NywxLTFTNTYuNTUzLDguODg0LDU2LDguODg0eiIvPgoJPC9nPgoJPHBhdGggc3R5bGU9ImZpbGw6I0VBRUFENjsiIGQ9Ik01NS41NTYsMTkuODg0TDM1LjgsMC4xNTZjLTAuMDU0LTAuMDU0LTAuMTQyLTAuMDU0LTAuMTk2LDBMMTUuODQ5LDE5Ljg4NEg1NS41NTZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojQkZCREEzOyIgZD0iTTE1Ljg3NiwxOS44ODRMMzIuODUxLDIuOTA5bC0yLjc1My0yLjc1M2MtMC4wNTQtMC4wNTQtMC4xNDItMC4wNTQtMC4xOTYsMEwxMC4xNDcsMTkuODg0SDE1Ljg3NnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM2RDhDNjA7IiBkPSJNNDcuMzMxLDIwLjUwOWwwLjMwOS0wLjMwOUwzNS43NTksOC4zMzVjLTAuMDMyLTAuMDMyLTAuMDgzLTAuMDMyLTAuMTE1LDBMMjMuNzY5LDIwLjJsMC4zMDksMC4zMDkgICBINDcuMzMxeiIvPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6Izc3NDQyQjsiIGQ9Ik0wLDEyLjg4NHYzOC44NDhjMCwzLjM5OCwyLjc1NCw2LjE1Miw2LjE1Miw2LjE1Mkg1OHYtMzhIN0MzLjEzNCwxOS44ODQsMCwxNi43NSwwLDEyLjg4NHoiLz4KCTwvZz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM5MTU1M0Q7IiBkPSJNNTIsMjQuODg0aC0yYy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xaDJjMC41NTMsMCwxLDAuNDQ3LDEsMVM1Mi41NTMsMjQuODg0LDUyLDI0Ljg4NHogICAgTTQ2LDI0Ljg4NGgtMmMtMC41NTMsMC0xLTAuNDQ3LTEtMXMwLjQ0Ny0xLDEtMWgyYzAuNTUzLDAsMSwwLjQ0NywxLDFTNDYuNTUzLDI0Ljg4NCw0NiwyNC44ODR6IE00MCwyNC44ODRoLTIgICBjLTAuNTUzLDAtMS0wLjQ0Ny0xLTFzMC40NDctMSwxLTFoMmMwLjU1MywwLDEsMC40NDcsMSwxUzQwLjU1MywyNC44ODQsNDAsMjQuODg0eiBNMzQsMjQuODg0aC0yYy0wLjU1MywwLTEtMC40NDctMS0xICAgczAuNDQ3LTEsMS0xaDJjMC41NTMsMCwxLDAuNDQ3LDEsMVMzNC41NTMsMjQuODg0LDM0LDI0Ljg4NHogTTI4LDI0Ljg4NGgtMmMtMC41NTMsMC0xLTAuNDQ3LTEtMXMwLjQ0Ny0xLDEtMWgyICAgYzAuNTUzLDAsMSwwLjQ0NywxLDFTMjguNTUzLDI0Ljg4NCwyOCwyNC44ODR6IE0yMiwyNC44ODRoLTJjLTAuNTUzLDAtMS0wLjQ0Ny0xLTFzMC40NDctMSwxLTFoMmMwLjU1MywwLDEsMC40NDcsMSwxICAgUzIyLjU1MywyNC44ODQsMjIsMjQuODg0eiBNMTYsMjQuODg0aC0yYy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xaDJjMC41NTMsMCwxLDAuNDQ3LDEsMVMxNi41NTMsMjQuODg0LDE2LDI0Ljg4NHogICAgTTEwLDI0Ljg4NEg4Yy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xaDJjMC41NTMsMCwxLDAuNDQ3LDEsMVMxMC41NTMsMjQuODg0LDEwLDI0Ljg4NHogTTQuMDkxLDI0LjI1NCAgIGMtMC4xMzksMC0wLjI4LTAuMDI5LTAuNDE1LTAuMDkxYy0wLjY5My0wLjMxNy0xLjMzNy0wLjczMS0xLjkxNC0xLjIzMUMxLjM0NSwyMi41NjksMS4zLDIxLjkzNywxLjY2MSwyMS41MiAgIGMwLjM2My0wLjQxNywwLjk5NC0wLjQ2MiwxLjQxMS0wLjEwMWMwLjQzMywwLjM3NiwwLjkxNiwwLjY4NywxLjQzNiwwLjkyNWMwLjUwMiwwLjIyOSwwLjcyMywwLjgyMywwLjQ5MywxLjMyNSAgIEM0LjgzMywyNC4wMzcsNC40NzEsMjQuMjU0LDQuMDkxLDI0LjI1NHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM5MTU1M0Q7IiBkPSJNNTIsNTQuODg0aC0yYy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xaDJjMC41NTMsMCwxLDAuNDQ3LDEsMVM1Mi41NTMsNTQuODg0LDUyLDU0Ljg4NHogICAgTTQ2LDU0Ljg4NGgtMmMtMC41NTMsMC0xLTAuNDQ3LTEtMXMwLjQ0Ny0xLDEtMWgyYzAuNTUzLDAsMSwwLjQ0NywxLDFTNDYuNTUzLDU0Ljg4NCw0Niw1NC44ODR6IE00MCw1NC44ODRoLTIgICBjLTAuNTUzLDAtMS0wLjQ0Ny0xLTFzMC40NDctMSwxLTFoMmMwLjU1MywwLDEsMC40NDcsMSwxUzQwLjU1Myw1NC44ODQsNDAsNTQuODg0eiBNMzQsNTQuODg0aC0yYy0wLjU1MywwLTEtMC40NDctMS0xICAgczAuNDQ3LTEsMS0xaDJjMC41NTMsMCwxLDAuNDQ3LDEsMVMzNC41NTMsNTQuODg0LDM0LDU0Ljg4NHogTTI4LDU0Ljg4NGgtMmMtMC41NTMsMC0xLTAuNDQ3LTEtMXMwLjQ0Ny0xLDEtMWgyICAgYzAuNTUzLDAsMSwwLjQ0NywxLDFTMjguNTUzLDU0Ljg4NCwyOCw1NC44ODR6IE0yMiw1NC44ODRoLTJjLTAuNTUzLDAtMS0wLjQ0Ny0xLTFzMC40NDctMSwxLTFoMmMwLjU1MywwLDEsMC40NDcsMSwxICAgUzIyLjU1Myw1NC44ODQsMjIsNTQuODg0eiBNMTYsNTQuODg0aC0yYy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xaDJjMC41NTMsMCwxLDAuNDQ3LDEsMVMxNi41NTMsNTQuODg0LDE2LDU0Ljg4NHogICAgTTEwLDU0Ljg4NEg4Yy0wLjU1MywwLTEtMC40NDctMS0xczAuNDQ3LTEsMS0xaDJjMC41NTMsMCwxLDAuNDQ3LDEsMVMxMC41NTMsNTQuODg0LDEwLDU0Ljg4NHogTTQuMDkxLDU0LjI1NCAgIGMtMC4xMzksMC0wLjI4LTAuMDI5LTAuNDE1LTAuMDkxYy0wLjY5My0wLjMxNy0xLjMzNy0wLjczMS0xLjkxNC0xLjIzMUMxLjM0NSw1Mi41NjksMS4zLDUxLjkzNywxLjY2MSw1MS41MiAgIGMwLjM2My0wLjQxNywwLjk5NC0wLjQ2MiwxLjQxMS0wLjEwMWMwLjQzMywwLjM3NiwwLjkxNiwwLjY4NywxLjQzNiwwLjkyNWMwLjUwMiwwLjIyOSwwLjcyMywwLjgyMywwLjQ5MywxLjMyNSAgIEM0LjgzMyw1NC4wMzcsNC40NzEsNTQuMjU0LDQuMDkxLDU0LjI1NHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM2RDNEMjU7IiBkPSJNNTgsNDUuMDUxSDQ2Yy0zLjMxNCwwLTYtMi42ODYtNi02djBjMC0zLjMxNCwyLjY4Ni02LDYtNmgxMlY0NS4wNTF6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNUUzMTE4OyIgZD0iTTU4LDQzLjg4NEg0NmMtMy4zMTQsMC02LTIuNjg2LTYtNnYwYzAtMy4zMTQsMi42ODYtNiw2LTZoMTJWNDMuODg0eiIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRTRDMDVDOyIgY3g9IjQ3IiBjeT0iMzcuODg0IiByPSIzIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";          
     }

     // <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/those-icons" title="Those Icons">Those Icons</a> desde <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a> con licencia <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
     getIconIncome():string{
          return "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Y2lyY2xlIHN0eWxlPSJmaWxsOiMzMDNDNDI7IiBjeD0iMjI0IiBjeT0iMTYwIiByPSIxNjAiLz4KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZDQTI4OyIgY3g9IjIyNCIgY3k9IjE2MCIgcj0iMTM4LjY2NyIvPgo8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjI7ZmlsbDojRkZGRkZGO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSJNMTA2LjY2NywxODEuMzMzYzAtNzYuNDU4LDYyLjIwOC0xMzguNjY3LDEzOC42NjctMTM4LjY2NyAgYzMyLjgwNSwwLDYyLjkzOCwxMS41MSw4Ni43MDgsMzAuNjI1QzMwNi42MDQsNDEuNjYsMjY3LjY1NCwyMS4zMzMsMjI0LDIxLjMzM0MxNDcuNTQyLDIxLjMzMyw4NS4zMzMsODMuNTQyLDg1LjMzMywxNjAgIGMwLDQzLjY1NCwyMC4zMjcsODIuNjA0LDUxLjk1OCwxMDguMDQyQzExOC4xNzcsMjQ0LjI3MSwxMDYuNjY3LDIxNC4xMzgsMTA2LjY2NywxODEuMzMzeiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMDNDNDI7IiBkPSJNMjI5LjMzMywyMDIuNjY3SDE5MmMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N2MwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3ICAgaDIxLjMzM3YxMC42NjdjMCw1Ljg5Niw0Ljc3MSwxMC42NjcsMTAuNjY3LDEwLjY2N2M1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3di0xMS4yMDZjMTguMDQ2LTIuNjE1LDMyLTE4LjAzNiwzMi0zNi43OTQgICBjMC0yMC41ODMtMTYuNzUtMzcuMzMzLTM3LjMzMy0zNy4zMzNoLTEwLjY2N2MtOC44MjMsMC0xNi03LjE3Ny0xNi0xNmMwLTguODIzLDcuMTc3LTE2LDE2LTE2SDI1NiAgIGM1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3QzI2Ni42NjcsMTAwLjc3MSwyNjEuODk2LDk2LDI1Niw5NmgtMjEuMzMzVjg1LjMzM2MwLTUuODk2LTQuNzcxLTEwLjY2Ny0xMC42NjctMTAuNjY3ICAgYy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3djExLjIwNmMtMTguMDQ2LDIuNjE1LTMyLDE4LjAzNi0zMiwzNi43OTRjMCwyMC41ODMsMTYuNzUsMzcuMzMzLDM3LjMzMywzNy4zMzNoMTAuNjY3ICAgYzguODIzLDAsMTYsNy4xNzcsMTYsMTZTMjM4LjE1NiwyMDIuNjY3LDIyOS4zMzMsMjAyLjY2N3oiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMDNDNDI7IiBkPSJNNDM3LjMzMywyOTguNjY3SDM1MmMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N1MzNDYuMTA0LDMyMCwzNTIsMzIwaDU5LjU4MyAgIGwtMTM0LjI1LDEzNC4yNWwtNzcuNzkyLTc3Ljc5MmMtNC4xNjctNC4xNjctMTAuOTE3LTQuMTY3LTE1LjA4MywwTDY3LjEyNSw0OTMuNzkyYy00LjE2Nyw0LjE2Ny00LjE2NywxMC45MTcsMCwxNS4wODMgICBjMi4wODMsMi4wODMsNC44MTMsMy4xMjUsNy41NDIsMy4xMjVjMi43MjksMCw1LjQ1OC0xLjA0Miw3LjU0Mi0zLjEyNUwxOTIsMzk5LjA4M2w3Ny43OTIsNzcuNzkyICAgYzQuMTY3LDQuMTY3LDEwLjkxNyw0LjE2NywxNS4wODMsMGwxNDEuNzkyLTE0MS43OTJ2NTkuNTgzYzAsNS44OTYsNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjdTNDQ4LDQwMC41NjMsNDQ4LDM5NC42Njd2LTg1LjMzMyAgIEM0NDgsMzAzLjQzOCw0NDMuMjI5LDI5OC42NjcsNDM3LjMzMywyOTguNjY3eiIvPgo8L2c+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTQ1LjIxMDQiIHkxPSI2MzcuNDE0MiIgeDI9Ii0yNS41MzI5IiB5Mj0iNjI4LjIzOCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgyMS4zMzMzIDAgMCAtMjEuMzMzMyA5OTYuMzMzNCAxMzc5MS42NjcpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MC4yIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8xXyk7IiBkPSJNMjI0LDMyMGM4OC4yMjksMCwxNjAtNzEuNzcxLDE2MC0xNjBTMzEyLjIyOSwwLDIyNCwwUzY0LDcxLjc3MSw2NCwxNjBTMTM1Ljc3MSwzMjAsMjI0LDMyMHogICBNNDM3LjMzMywyOTguNjY3SDM1MmMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N1MzNDYuMTA0LDMyMCwzNTIsMzIwaDU5LjU4M2wtMTM0LjI1LDEzNC4yNWwtNzcuNzkyLTc3Ljc5MiAgYy00LjE2Ny00LjE2Ny0xMC45MTctNC4xNjctMTUuMDgzLDBMNjcuMTI1LDQ5My43OTJjLTQuMTY3LDQuMTY3LTQuMTY3LDEwLjkxNywwLDE1LjA4M2MyLjA4MywyLjA4Myw0LjgxMywzLjEyNSw3LjU0MiwzLjEyNSAgYzIuNzI5LDAsNS40NTgtMS4wNDIsNy41NDItMy4xMjVMMTkyLDM5OS4wODNsNzcuNzkyLDc3Ljc5MmM0LjE2Nyw0LjE2NywxMC45MTcsNC4xNjcsMTUuMDgzLDBsMTQxLjc5Mi0xNDEuNzkydjU5LjU4MyAgYzAsNS44OTYsNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjdTNDQ4LDQwMC41NjMsNDQ4LDM5NC42Njd2LTg1LjMzM0M0NDgsMzAzLjQzOCw0NDMuMjI5LDI5OC42NjcsNDM3LjMzMywyOTguNjY3eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
     }

     // <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/those-icons" title="Those Icons">Those Icons</a> desde <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a> con licencia <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
     getIconExpense():string{
          return "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Y2lyY2xlIHN0eWxlPSJmaWxsOiMzMDNDNDI7IiBjeD0iMjI0IiBjeT0iMTYwIiByPSIxNjAiLz4KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZDQTI4OyIgY3g9IjIyNCIgY3k9IjE2MCIgcj0iMTM4LjY2NyIvPgo8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjI7ZmlsbDojRkZGRkZGO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiBkPSJNMTA2LjY2NywxODEuMzMzYzAtNzYuNDU4LDYyLjIwOC0xMzguNjY3LDEzOC42NjctMTM4LjY2NyAgYzMyLjgwNSwwLDYyLjkzOCwxMS41MSw4Ni43MDgsMzAuNjI1QzMwNi42MDQsNDEuNjYsMjY3LjY1NCwyMS4zMzMsMjI0LDIxLjMzM0MxNDcuNTQyLDIxLjMzMyw4NS4zMzMsODMuNTQyLDg1LjMzMywxNjAgIGMwLDQzLjY1NCwyMC4zMjcsODIuNjA0LDUxLjk1OCwxMDguMDQyQzExOC4xNzcsMjQ0LjI3MSwxMDYuNjY3LDIxNC4xMzgsMTA2LjY2NywxODEuMzMzeiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMDNDNDI7IiBkPSJNMjI5LjMzMywyMDIuNjY3SDE5MmMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N2MwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3ICAgaDIxLjMzM3YxMC42NjdjMCw1Ljg5Niw0Ljc3MSwxMC42NjcsMTAuNjY3LDEwLjY2N2M1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3di0xMS4yMDZjMTguMDQ2LTIuNjE1LDMyLTE4LjAzNiwzMi0zNi43OTQgICBjMC0yMC41ODMtMTYuNzUtMzcuMzMzLTM3LjMzMy0zNy4zMzNoLTEwLjY2N2MtOC44MjMsMC0xNi03LjE3Ny0xNi0xNmMwLTguODIzLDcuMTc3LTE2LDE2LTE2SDI1NiAgIGM1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3QzI2Ni42NjcsMTAwLjc3MSwyNjEuODk2LDk2LDI1Niw5NmgtMjEuMzMzVjg1LjMzM2MwLTUuODk2LTQuNzcxLTEwLjY2Ny0xMC42NjctMTAuNjY3ICAgYy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3djExLjIwNmMtMTguMDQ2LDIuNjE1LTMyLDE4LjAzNi0zMiwzNi43OTRjMCwyMC41ODMsMTYuNzUsMzcuMzMzLDM3LjMzMywzNy4zMzNoMTAuNjY3ICAgYzguODIzLDAsMTYsNy4xNzcsMTYsMTZTMjM4LjE1NiwyMDIuNjY3LDIyOS4zMzMsMjAyLjY2N3oiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMDNDNDI7IiBkPSJNNDM3LjMzMyw0MDUuMzMzYy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3djU5LjYxM0wyODQuODc1LDMzMy43OTIgICBjLTItMi00LjcwOC0zLjEyNS03LjU0Mi0zLjEyNXMtNS41NDIsMS4xMjUtNy41NDIsMy4xMjVMMTkyLDQxMS41ODNMODIuMjA4LDMwMS43OTJjLTQuMTY3LTQuMTY3LTEwLjkxNy00LjE2Ny0xNS4wODMsMCAgIGMtNC4xNjcsNC4xNjctNC4xNjcsMTAuOTE3LDAsMTUuMDgzbDExNy4zMzMsMTE3LjMzM2M0LjE2Nyw0LjE2NywxMC45MTcsNC4xNjcsMTUuMDgzLDBsNzcuNzkyLTc3Ljc5MmwxMzQuMjIsMTM0LjI1SDM1MiAgIGMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N1MzNDYuMTA0LDUxMiwzNTIsNTEyaDg1LjMzM2M1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3VjQxNiAgIEM0NDgsNDEwLjEwNCw0NDMuMjI5LDQwNS4zMzMsNDM3LjMzMyw0MDUuMzMzeiIvPgo8L2c+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTQ0LjA0OTYiIHkxPSI2MzkuOTAzIiB4Mj0iLTIyLjQ1NjkiIHkyPSI2MjkuODM1NSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgyMS4zMzMzIDAgMCAtMjEuMzMzMyA5OTYuMzMzNCAxMzc5MS42NjcpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MC4yIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8xXyk7IiBkPSJNMjI0LDMyMGM4OC4yMjksMCwxNjAtNzEuNzcxLDE2MC0xNjBTMzEyLjIyOSwwLDIyNCwwUzY0LDcxLjc3MSw2NCwxNjBTMTM1Ljc3MSwzMjAsMjI0LDMyMHogICBNNDM3LjMzMyw0MDUuMzMzYy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3djU5LjYxM0wyODQuODc1LDMzMy43OTJjLTItMi00LjcwOC0zLjEyNS03LjU0Mi0zLjEyNSAgcy01LjU0MiwxLjEyNS03LjU0MiwzLjEyNUwxOTIsNDExLjU4M0w4Mi4yMDgsMzAxLjc5MmMtNC4xNjctNC4xNjctMTAuOTE3LTQuMTY3LTE1LjA4MywwYy00LjE2Nyw0LjE2Ny00LjE2NywxMC45MTcsMCwxNS4wODMgIGwxMTcuMzMzLDExNy4zMzNjNC4xNjcsNC4xNjcsMTAuOTE3LDQuMTY3LDE1LjA4MywwbDc3Ljc5Mi03Ny43OTJsMTM0LjIyLDEzNC4yNUgzNTJjLTUuODk2LDAtMTAuNjY3LDQuNzcxLTEwLjY2NywxMC42NjcgIFMzNDYuMTA0LDUxMiwzNTIsNTEyaDg1LjMzM2M1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3VjQxNkM0NDgsNDEwLjEwNCw0NDMuMjI5LDQwNS4zMzMsNDM3LjMzMyw0MDUuMzMzeiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
     }
     
     // <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/smashicons" title="Smashicons">Smashicons</a> desde <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a> con licencia <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
     getIconCategory():string{
          return "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU3LjkxMiA1Ny45MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU3LjkxMiA1Ny45MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNCNTg4NUI7IiBkPSJNNTQsMjIuOTU2VjcuNzI0YzAtMC40MjQtMC4zNDQtMC43NjgtMC43NjgtMC43NjhIMjIuNDM1Yy0wLjI3LDAtMC41Mi0wLjE0MS0wLjY1OC0wLjM3MyAgIGwtMi41NTMtNC4yNTVjLTAuMTM5LTAuMjMxLTAuMzg5LTAuMzczLTAuNjU4LTAuMzczSDQuNzY4QzQuMzQ0LDEuOTU2LDQsMi4zLDQsMi43MjR2MjAuMjMySDU0eiIvPgo8L2c+CjxyZWN0IHg9IjciIHk9IjE4Ljk1NiIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSI0NCIgaGVpZ2h0PSI0Ii8+CjxyZWN0IHg9IjgiIHk9IjE1Ljk1NiIgc3R5bGU9ImZpbGw6I0U3RUNFRDsiIHdpZHRoPSI0MiIgaGVpZ2h0PSIzIi8+CjxyZWN0IHg9IjkiIHk9IjEyLjk1NiIgc3R5bGU9ImZpbGw6I0M3Q0FDNzsiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzIi8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGN0I1NjM7IiBkPSJNNTIuNzIzLDU1Ljk1Nkg1LjE4OWMtMC4xMzQsMC0wLjI0OC0wLjA5OC0wLjI2OC0wLjIzTDAuMDAzLDIzLjI2OCAgYy0wLjAyNS0wLjE2NCwwLjEwMi0wLjMxMiwwLjI2OC0wLjMxMmg1Ny4zN2MwLjE2NiwwLDAuMjkzLDAuMTQ4LDAuMjY4LDAuMzEybC00LjkxOCwzMi40NTggIEM1Mi45NzEsNTUuODU4LDUyLjg1Nyw1NS45NTYsNTIuNzIzLDU1Ljk1NnoiLz4KPHJlY3QgeD0iMjYuOTU2IiB5PSIzNi45NTYiIHN0eWxlPSJmaWxsOiNFREVBREE7IiB3aWR0aD0iMTkiIGhlaWdodD0iMTIiLz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojQ0VDOUFFOyIgZD0iTTMwLjk1Niw0MS45NTZoNGMwLjU1MywwLDEtMC40NDcsMS0xcy0wLjQ0Ny0xLTEtMWgtNGMtMC41NTMsMC0xLDAuNDQ3LTEsMSAgIFMzMC40MDMsNDEuOTU2LDMwLjk1Niw0MS45NTZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojQ0VDOUFFOyIgZD0iTTM4Ljk1Niw0MS45NTZoMWMwLjU1MywwLDEtMC40NDcsMS0xcy0wLjQ0Ny0xLTEtMWgtMWMtMC41NTMsMC0xLDAuNDQ3LTEsMSAgIFMzOC40MDMsNDEuOTU2LDM4Ljk1Niw0MS45NTZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojQ0VDOUFFOyIgZD0iTTQxLjk1Niw0My45NTZoLTExYy0wLjU1MywwLTEsMC40NDctMSwxczAuNDQ3LDEsMSwxaDExYzAuNTUzLDAsMS0wLjQ0NywxLTEgICBTNDIuNTA5LDQzLjk1Niw0MS45NTYsNDMuOTU2eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=";
     }

     // <div>Iconos diseñados por <a href="http://www.freepik.com" title="Freepik">Freepik</a> desde <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a> con licencia <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
     getIconDebt():string{
          return "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0YyRjJGMjsiIGQ9Ik01MDkuNjUzLDExMy41MTJsLTg1LjUxMS04NS41MTFjLTEuNTA1LTEuNTAzLTMuNTQzLTIuMzQ3LTUuNjY5LTIuMzQ3SDkzLjUyOCAgYy00LjQyOCwwLTguMDE3LDMuNTg4LTguMDE3LDguMDE3djQ3MC4zMTNjMCw0LjQyOCwzLjU4OCw4LjAxNyw4LjAxNyw4LjAxN2g0MTAuNDU1YzQuNDI4LDAsOC4wMTctMy41ODgsOC4wMTctOC4wMTdWMTE5LjE4MiAgQzUxMiwxMTcuMDU2LDUxMS4xNTYsMTE1LjAxNyw1MDkuNjUzLDExMy41MTJ6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0U1RTVFNTsiIGQ9Ik01MTEuOTgyLDExOC44MjZjLTAuMDg5LTEuOTk2LTAuOTEyLTMuODkzLTIuMzMtNS4zMTJMNDI0LjE0LDI4LjAwMiAgIGMtMS41MDQtMS41MDQtMy41NDItMi4zNDgtNS42NjgtMi4zNDhoLTAuMzU2djg1LjE1NmMwLDQuNDI3LDMuNTg5LDguMDE3LDguMDE3LDguMDE3SDUxMS45ODJ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRTVFNUU1OyIgZD0iTTkzLjUyOCwyNS42NTNjLTQuNDI4LDAtOC4wMTcsMy41ODgtOC4wMTcsOC4wMTd2NDcwLjMxM2MwLDQuNDI4LDMuNTg4LDguMDE3LDguMDE3LDguMDE3aDM3NS44ODggICBMMTM2LjE0NCwyNS42NTNIOTMuNTI4eiIvPgo8L2c+CjxwYXRoIHN0eWxlPSJmaWxsOiM2NjY2NjY7IiBkPSJNMjE0LjMxMywwSDI0LjA1QzEwLjc4OSwwLDAsMTAuNzg5LDAsMjQuMDV2MjU4LjY3MmMwLDEzLjI2MSwxMC43ODksMjQuMDUsMjQuMDUsMjQuMDVoMTkwLjI2MyAgYzEzLjI2MSwwLDI0LjA1LTEwLjc4OSwyNC4wNS0yNC4wNVYyNC4wNUMyMzguMzYzLDEwLjc4OSwyMjcuNTc0LDAsMjE0LjMxMywweiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRjdEMDRBOyIgZD0iTTM1OC42MTQsMjQ3Ljk4M2MtNjUuNzE3LDAtMTE5LjE4Miw1My40NjUtMTE5LjE4MiwxMTkuMTgyczUzLjQ2NSwxMTkuMTgyLDExOS4xODIsMTE5LjE4MiAgczExOS4xODItNTMuNDY1LDExOS4xODItMTE5LjE4MlM0MjQuMzMsMjQ3Ljk4MywzNTguNjE0LDI0Ny45ODN6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGM0I0MUI7IiBkPSJNMzgyLjEyOSw0NjIuODMxYy02NS43MTcsMC0xMTkuMTgyLTUzLjQ2NS0xMTkuMTgyLTExOS4xODJjMC0yNi44NzUsOC45NDYtNTEuNjk4LDI0LjAwOS03MS42NTYgIGMtMjguODQ1LDIxLjc3Mi00Ny41MjUsNTYuMzMxLTQ3LjUyNSw5NS4xNzJjMCw2NS43MTcsNTMuNDY1LDExOS4xODIsMTE5LjE4MiwxMTkuMTgyYzM4Ljg0MSwwLDczLjQtMTguNjgsOTUuMTcyLTQ3LjUyNSAgQzQzMy44MjgsNDUzLjg4NSw0MDkuMDA1LDQ2Mi44MzEsMzgyLjEyOSw0NjIuODMxeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRUI2ODM2OyIgZD0iTTM3Ni45MTUsMzYwLjIxN2wtMTIuNDIzLTAuMzY2di00NC41MjhoMjguMzI2YzQuNDI4LDAsOC4wMTctMy41ODgsOC4wMTctOC4wMTcgIGMwLTQuNDI4LTMuNTg4LTguMDE3LTguMDE3LTguMDE3aC0yOC4zMjZ2LTkuMDg2YzAtNC40MjgtMy41ODgtOC4wMTctOC4wMTctOC4wMTdjLTQuNDI4LDAtOC4wMTcsMy41ODgtOC4wMTcsOC4wMTd2OS4wODZoLTguMDE3ICBjLTEzLjI2MSwwLTI0LjA1LDEwLjc4OS0yNC4wNSwyNC4wNXYyNy43OTFjMCwxMy4yMTcsMTAuNzE5LDIzLjk4LDIzLjkyLDI0LjA1bDguMTQ3LDAuMjM5djQzLjU4NWgtMjQuMDUgIGMtNC40MjgsMC04LjAxNywzLjU4OC04LjAxNyw4LjAxN3MzLjU4OCw4LjAxNyw4LjAxNyw4LjAxN2gyNC4wNXY5LjA4NmMwLDQuNDI4LDMuNTg4LDguMDE3LDguMDE3LDguMDE3ICBjNC40MjgsMCw4LjAxNy0zLjU4OCw4LjAxNy04LjAxN3YtOS4wODZoMTIuMjkyYzEzLjI2MSwwLDI0LjA1LTEwLjc4OSwyNC4wNS0yNC4wNXYtMjYuNzIyICBDNDAwLjgzNSwzNzEuMDUsMzkwLjExNiwzNjAuMjg4LDM3Ni45MTUsMzYwLjIxN3ogTTM0MC42NzksMzU5LjE1MWMtMC4wNzgtMC4wMDItMC4xNTctMC4wMDMtMC4yMzYtMC4wMDMgIGMtNC40MjEsMC04LjAxNy0zLjU5Ni04LjAxNy04LjAxN1YzMjMuMzRjMC00LjQyMSwzLjU5Ni04LjAxNyw4LjAxNy04LjAxN2g4LjAxN3Y0NC4wNTdMMzQwLjY3OSwzNTkuMTUxeiBNMzg0LjgwMiw0MTAuOTkgIGMwLDQuNDIxLTMuNTk2LDguMDE3LTguMDE3LDguMDE3aC0xMi4yOTJ2LTQzLjExNGwxMi4wNTYsMC4zNTVjMC4wNzgsMC4wMDIsMC4xNTcsMC4wMDMsMC4yMzYsMC4wMDMgIGM0LjQyMSwwLDguMDE3LDMuNTk2LDguMDE3LDguMDE3VjQxMC45OXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0YyRjJGMjsiIGQ9Ik0yMDQuNjkzLDI1LjY1M0gzMy42N2MtNC40MjgsMC04LjAxNywzLjU4OC04LjAxNyw4LjAxN3Y0Mi43NTZjMCw0LjQyOCwzLjU4OCw4LjAxNyw4LjAxNyw4LjAxNyAgaDE3MS4wMjNjNC40MjgsMCw4LjAxNy0zLjU4OCw4LjAxNy04LjAxN1YzMy42N0MyMTIuNzEsMjkuMjQyLDIwOS4xMjIsMjUuNjUzLDIwNC42OTMsMjUuNjUzeiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM2MkM5Q0M7IiBkPSJNMzMuNjcsMjUuNjUzYy00LjQyOCwwLTguMDE3LDMuNTg4LTguMDE3LDguMDE3djQyLjc1NmMwLDQuNDI4LDMuNTg4LDguMDE3LDguMDE3LDguMDE3aDM0LjczOSAgIGw1OC43ODktNTguNzg5SDMzLjY3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzYyQzlDQzsiIGQ9Ik0yMDQuNjkzLDI1LjY1M2gtMjkuOTI5bC01OC43ODksNTguNzg5aDg4LjcxOGM0LjQyOCwwLDguMDE3LTMuNTg4LDguMDE3LTguMDE3VjMzLjY3ICAgQzIxMi43MSwyOS4yNDIsMjA5LjEyMiwyNS42NTMsMjA0LjY5MywyNS42NTN6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRUY5RDNDOyIgZD0iTTY3Ljg3NSw5NC4wNjNIMzMuNjdjLTQuNDI4LDAtOC4wMTcsMy41ODgtOC4wMTcsOC4wMTd2MzQuMjA1YzAsNC40MjgsMy41ODgsOC4wMTcsOC4wMTcsOC4wMTcgICBoMzQuMjA1YzQuNDI4LDAsOC4wMTctMy41ODgsOC4wMTctOC4wMTd2LTM0LjIwNUM3NS44OTEsOTcuNjUxLDcyLjMwMyw5NC4wNjMsNjcuODc1LDk0LjA2M3oiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFRjlEM0M7IiBkPSJNMTM1Ljc0OSw5NC4wNjNoLTM0LjIwNWMtNC40MjgsMC04LjAxNywzLjU4OC04LjAxNyw4LjAxN3YzNC4yMDVjMCw0LjQyOCwzLjU4OCw4LjAxNyw4LjAxNyw4LjAxNyAgIGgzNC4yMDVjNC40MjgsMCw4LjAxNy0zLjU4OCw4LjAxNy04LjAxN3YtMzQuMjA1QzE0My43NjYsOTcuNjUxLDE0MC4xNzgsOTQuMDYzLDEzNS43NDksOTQuMDYzeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0VGOUQzQzsiIGQ9Ik02Ny44NzUsMTYyLjQ3MkgzMy42N2MtNC40MjgsMC04LjAxNywzLjU4OC04LjAxNyw4LjAxN3YzNC4yMDVjMCw0LjQyOCwzLjU4OCw4LjAxNyw4LjAxNyw4LjAxNyAgIGgzNC4yMDVjNC40MjgsMCw4LjAxNy0zLjU4OCw4LjAxNy04LjAxN3YtMzQuMjA1Qzc1Ljg5MSwxNjYuMDYsNzIuMzAzLDE2Mi40NzIsNjcuODc1LDE2Mi40NzJ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRUY5RDNDOyIgZD0iTTEzNS43NDksMTYyLjQ3MmgtMzQuMjA1Yy00LjQyOCwwLTguMDE3LDMuNTg4LTguMDE3LDguMDE3djM0LjIwNWMwLDQuNDI4LDMuNTg4LDguMDE3LDguMDE3LDguMDE3ICAgaDM0LjIwNWM0LjQyOCwwLDguMDE3LTMuNTg4LDguMDE3LTguMDE3di0zNC4yMDVDMTQzLjc2NiwxNjYuMDYsMTQwLjE3OCwxNjIuNDcyLDEzNS43NDksMTYyLjQ3MnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFRjlEM0M7IiBkPSJNNjcuODc1LDIzMC44ODFIMzMuNjdjLTQuNDI4LDAtOC4wMTcsMy41ODgtOC4wMTcsOC4wMTd2MzQuMjA1YzAsNC40MjgsMy41ODgsOC4wMTcsOC4wMTcsOC4wMTcgICBoMzQuMjA1YzQuNDI4LDAsOC4wMTctMy41ODgsOC4wMTctOC4wMTd2LTM0LjIwNUM3NS44OTEsMjM0LjQ2OSw3Mi4zMDMsMjMwLjg4MSw2Ny44NzUsMjMwLjg4MXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFRjlEM0M7IiBkPSJNMTM1Ljc0OSwyMzAuODgxaC0zNC4yMDVjLTQuNDI4LDAtOC4wMTcsMy41ODgtOC4wMTcsOC4wMTd2MzQuMjA1YzAsNC40MjgsMy41ODgsOC4wMTcsOC4wMTcsOC4wMTcgICBoMzQuMjA1YzQuNDI4LDAsOC4wMTctMy41ODgsOC4wMTctOC4wMTd2LTM0LjIwNUMxNDMuNzY2LDIzNC40NjksMTQwLjE3OCwyMzAuODgxLDEzNS43NDksMjMwLjg4MXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFRjlEM0M7IiBkPSJNMjA0LjE1OSw5NC4wNjNoLTM0LjIwNWMtNC40MjgsMC04LjAxNywzLjU4OC04LjAxNyw4LjAxN3YzNC4yMDVjMCw0LjQyOCwzLjU4OCw4LjAxNyw4LjAxNyw4LjAxNyAgIGgzNC4yMDVjNC40MjgsMCw4LjAxNy0zLjU4OCw4LjAxNy04LjAxN3YtMzQuMjA1QzIxMi4xNzUsOTcuNjUxLDIwOC41ODcsOTQuMDYzLDIwNC4xNTksOTQuMDYzeiIvPgo8L2c+CjxwYXRoIHN0eWxlPSJmaWxsOiNGN0QwNEE7IiBkPSJNMjA0LjY5MywxNjIuNDcyaC0zNC4yMDVjLTQuNDI4LDAtOC4wMTcsMy41ODgtOC4wMTcsOC4wMTd2MTAyLjYxNGMwLDQuNDI4LDMuNTg4LDguMDE3LDguMDE3LDguMDE3ICBoMzQuMjA1YzQuNDI4LDAsOC4wMTctMy41ODgsOC4wMTctOC4wMTdWMTcwLjQ4OUMyMTIuNzEsMTY2LjA2LDIwOS4xMjIsMTYyLjQ3MiwyMDQuNjkzLDE2Mi40NzJ6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiM2NjY2NjY7IiBkPSJNMjk3Ljg0Niw5Mi45OTRjLTIuMTgzLDAtNC4zNTgtMC44ODYtNS45NDEtMi42MzJsLTE1LjUxLTE3LjEwMiAgYy0yLjk3NC0zLjI3OS0yLjcyNy04LjM1LDAuNTU0LTExLjMyNGMzLjI3Ni0yLjk3Niw4LjM0OS0yLjcyOSwxMS4zMjQsMC41NTRsMTUuNTEsMTcuMTAyYzIuOTc0LDMuMjc5LDIuNzI3LDguMzUtMC41NTQsMTEuMzI0ICBDMzAxLjY5NSw5Mi4zMDgsMjk5Ljc2Nyw5Mi45OTQsMjk3Ljg0Niw5Mi45OTR6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzYyQzlDQzsiIGQ9Ik00NjQuMTEsMjE0LjEyNkwzMzYuMzc3LDg2LjM5MWMtMS4xMi0xLjExOS0yLjU0NS0xLjg4Mi00LjA5Ny0yLjE5MmwtMzAuMjMzLTYuMDQ2ICAgYy0yLjYyNy0wLjUyMi01LjM0NCwwLjI5Ny03LjI0MSwyLjE5MmMtMS44OTQsMS44OTUtMi43MTcsNC42MTItMi4xOTIsNy4yNDFsNi4wNDYsMzAuMjMzYzAuMzEsMS41NTIsMS4wNzMsMi45NzcsMi4xOTIsNC4wOTcgICBsMTI3LjczNSwxMjcuNzM1YzUuMTE2LDUuMTE2LDEyLjQxNyw3LjY3LDE5LjYwNyw2Ljg5YzYuNDI4LTAuNjk3LDExLjQ0OS0zLjkzMiwxNS45MTctOC40MDIgICBDNDczLjQ4OCwyMzguNzYxLDQ3My40ODgsMjIzLjUwNSw0NjQuMTEsMjE0LjEyNnoiLz4KCQoJCTxyZWN0IHg9IjMwMC40NiIgeT0iMTIyLjg2IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43MDcxIC0wLjcwNzEgMC43MDcxIC0wLjcwNzEgNTE0LjA2NzggNTA4Ljg5MDkpIiBzdHlsZT0iZmlsbDojNjJDOUNDOyIgd2lkdGg9IjEyMy45MzciIGhlaWdodD0iNTAuMjM4Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6I0Y3RDA0QTsiIGQ9Ik0zMDIuMDQ3LDc4LjE1M2MtNS41MTMtMS4wOTYtMTAuNTM1LDMuOTE2LTkuNDMzLDkuNDMzbDYuMDQ2LDMwLjIzMyAgYzAuMzEsMS41NTIsMS4wNzMsMi45NzcsMi4xOTIsNC4wOTdsMzUuNTI1LTM1LjUyNWMtMS4xMi0xLjExOS0yLjU0NS0xLjg4Mi00LjA5Ny0yLjE5MkwzMDIuMDQ3LDc4LjE1M3oiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzUwQTlBOTsiIGQ9Ik00NjQuMTEsMjE0LjEyNmwtNDAuMDk1LTQwLjA5NWwtMzUuNTI1LDM1LjUyNWw0MC4wOTUsNDAuMDk1YzUuMDIxLDUuMDIxLDEyLjIsNy40NzksMTkuMjQ4LDYuODQgIGM2LjU2Mi0wLjU5NSwxMS43MTktMy43OTUsMTYuMjc2LTguMzUxQzQ3My40ODgsMjM4Ljc2MSw0NzMuNDg4LDIyMy41MDUsNDY0LjExLDIxNC4xMjZ6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiM2NjY2NjY7IiBkPSJNNDUxLjYzOSwyMjEuMDFjLTIuMDUxLDAtNC4xMDMtMC43ODItNS42NjktMi4zNDdjLTMuMTMxLTMuMTMyLTMuMTMxLTguMjA3LDAtMTEuMzM4bDEyLjMyMy0xMi4zMjIgIGwtMzcuNzAxLTM1LjgwMmMtMy4yMTEtMy4wNS0zLjM0Mi04LjEyNC0wLjI5My0xMS4zMzNjMy4wNTEtMy4yMTEsOC4xMjUtMy4zNDIsMTEuMzMzLTAuMjkzbDQzLjY2OCw0MS40NjcgIGMxLjU2OCwxLjQ4OSwyLjQ2OSwzLjU0OCwyLjQ5Niw1LjcxYzAuMDI4LDIuMTYxLTAuODE5LDQuMjQzLTIuMzQ2LDUuNzcybC0xOC4xNCwxOC4xNCAgQzQ1NS43NDIsMjIwLjIyNiw0NTMuNjksMjIxLjAxLDQ1MS42MzksMjIxLjAxeiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM4MDgwODA7IiBkPSJNMTk4LjI4LDM4My43MzNoLTUzLjQ0NWMtNC40MjgsMC04LjAxNy0zLjU4OC04LjAxNy04LjAxN2MwLTQuNDI4LDMuNTg4LTguMDE3LDguMDE3LTguMDE3aDUzLjQ0NSAgIGM0LjQyOCwwLDguMDE3LDMuNTg4LDguMDE3LDguMDE3QzIwNi4yOTYsMzgwLjE0NSwyMDIuNzA4LDM4My43MzMsMTk4LjI4LDM4My43MzN6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojODA4MDgwOyIgZD0iTTE5OC4yOCw0MjYuNDg5aC01My40NDVjLTQuNDI4LDAtOC4wMTctMy41ODgtOC4wMTctOC4wMTdzMy41ODgtOC4wMTcsOC4wMTctOC4wMTdoNTMuNDQ1ICAgYzQuNDI4LDAsOC4wMTcsMy41ODgsOC4wMTcsOC4wMTdTMjAyLjcwOCw0MjYuNDg5LDE5OC4yOCw0MjYuNDg5eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=";
     }
}