
Folder/Component structure
    - App
        - Navbar
            - Brand
            - Direction/Status
            - Score + Top Score
        - Header
        - div to hold Cards
            - Cards/Images
        - Footer

Pseudo
    - On load
        - display images from stored image objects
        - set state score and topscore set to 0
        - set characters array = characters array
        - set unselected characters arary = characters array
    - Click Image
        - Check unselected character array for name of clicked card:
            if name is there:
                - score increment
                    - check against topscore
                    - if higher, topscore = score
                - remove name from unselected character array
            - add 
            - re-display from array of images randomly
        - if name is not present in unslected character array
            - user loses
                - set score back to 0 
                - reset unselected character array names back to default array