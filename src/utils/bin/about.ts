import config from '../../../config.json'

const about = async (args: string[]): Promise<string> => {
  if (config.ascii === 'skull') {
    return `                                                  
      <div>
        <p>
                      ....:::::--+++**++++.                                                                                                                                                                                                
                    :::::::----++***=========**.                                                                                                                                                                                            
                --:::::-:----+**====%%%%%%%%%%%%%=                                     ┓┓•          •                                                                                                                                                          
              ---::-------++**==%%@@@@@@@@@@@@@%%%%+                                ┏┏┓┃┃┓┏┓┏┏┓┏┳┓┏┓┓┏┓┏ ┏┏┓┏┳┓            
          .------------++++*=%%%%%%%%@@@@@@@@@@%%%%+*                               ┗┗┛┗┗┗┛┗┛┗┛┛┗┗┛┗┗┗┻┗•┗┗┛┛┗┗                                                                                                                                                             
        ++----------+++++****===%%%%%@@@@@@@@@@@@@##@@+                                                                                                                                                                                  
      ++-+--------++++++++****====%@@@################@=                        ...allow me, his skull, to explain.                                                                                                                                                            
    ++----------+++++++++**+=**==%%###############=****#                                                                                                                                                              
    ++----------++++++++++-+-+=*==@#=****-%@##=##@%*--*%*%                       ┓┓•                                                                  
  +++----------++++++++*-+---*=%#%%=*+++++%@%=@%%@@*@@@***+                   ┏┏┓┃┃┓┏┓                                                                                                                                                                       
  -++-----------++++++****---++@@%%*+++++++**==+====@@###**+                  ┗┗┛┗┗┗┛┗  houses a brain modest in size,                                                                                                                                                                   
  +++-----------+++++*****++-=@#@@@*++++++***+**=*=#*@####*+              But his creativity and innovation know few bounds.                                                                                                                                                            
  ++-----------++++*++*****=*=@#@%@@*++*****++==*=@-++#@%@@*+                                                                                                         
  +-----------++++****+===%=*##@@@=***=*+--+=#*=#--+++#@=**+                     Unfortunately for him, that means                                                                                                                                                         
  ++----:-----++++++***==%%%=@#@@%=**++--+%@##%=--++++#@%####                    he needs somewhere to keep it all.                                                                                                                                          
    +----:------++++++**=%%%%%*%=***=@%@@@##%=#@%-+++++@@#####@                                                                                                                                         
    +---:-------++++++**=@@=%****===######@+#%%@=++++++######@               Long story short, this is his online stash.                                                                                                                                                         
    :---::---+-++++++++*=%#+*****==@@######@#%%%#@=--+@@##@**             He made it really cool with the help of ASCII art                                                                                                                                                
      +---:----+*++++++=--+*****====@@######@%*=%%@#@#=%@@@              and many open-source repos from cool devs on GitHub.                                                                                                                                                             
      +---:---++:+***+..:--+***====%@#%####%%=*=%=@@%@%@@%@-           See the work from these <span class="rainbow rainbow_text_animated">beautiful people</span> with 'credits'                                                                                                                                    
        ----:--+++-:::.:@##*-++:-+%%@%#+-:+==****===@=%%%:@#@:               Me personally? I like the 'skull' command.                                                                                                                                               
        .----:+**=##@%@:**++-+++*%@%*#++-.:---**==%%=@%@#####                                                                                                                                                                                 
          :--::*%=%@#@@*=-+*+++++*=      *@+#+=#*#+*#-%#**@####                 Oh yeah, he also said to tell you...                                                                                                   
              :*%=%@#@@*=-+*+                                                                                                                                                            
              -:++**%%@#@%=%-:-                                               "  ┏┳┓┓     ┓    ┏        • • •    ╻  
              --:-+*=@@##*#%--++**%=             %-=@+#+@#%#@##@                  ┃ ┣┓┏┓┏┓┃┏┏  ╋┏┓┏┓  ┓┏┓┏┓╋┓┏┓┏┓┃                                                       
                :-+*=@@##*#%--+++**   =%**--=-:#-%-=@+#+@#%#@##@#                 ┻ ┛┗┗┻┛┗┛┗┛  ┛┗┛┛   ┗┛┗┛┗┗┗┛┗┗┫•  "                                                                                                                                         
                ::-*%@##%=   --++*****=:*=#+=++=#-#-#=*@%####%@@                                                ┛                                                                                                                                             
                              -:-+++*****=%====*+==*==%*=*@@%@@@@%:                                                                                                                                                                                            
                              -:-++++++++*======%%=@@%##@#@###@@@@%                                                                                                                                                                                            
                                -+++++---++**=%%%%%%%#@@########@@                                                                                                                                                                                           
                                    ---++++++.-++*==%%%%@@@####@                
                                    
        </p>
      </div>
`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  summary
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.site_urls.resume}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.site_urls.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓  C O L L I N S O M N I A C .com ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             DONATE 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="${config.social.kofi}" target="_blank">${config.social.kofi}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="${config.social.patreon}" target="_blank">${config.social.patreon}</a></u>

            @@@@@@@@@@@@@ 
            @@@@               @@@@             -----------
          @@                       @@            ABOUT
        @@                           @@          ${config.name}
      @@                               @@       ﰩ ${config.ps1_hostname}
     @@                         @@@     @@       <u><a href="${config.site_urls.resume}" target="_blank">resume</a></u>
    @@        @@@                        @@     爵 <u><a href="${config.site_urls.repo}" target="_blank">Github repo</a></u>
    @@                                   @@     -----------
    @@             .@@@@@@@@@@.          @@      SOCIAL 
     @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
      @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
         @@@                        @@@         -----------
            @@@                  @@@ @@          CONTACT
             @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.social.kofi}" target="_blank">${config.social.kofi}</a></u>
             @|                      @@          <u><a href="${config.social.patreon}" target="_blank">${config.social.patreon}</a></u>
                 @@@@@@@@@@@@@                   sumfetch: summary display
    
                                        ....:::::-----++++++--:
                                  :::::::------+++*****=======***++
                              ::::::::------+++++*****==============**+
                          .:::::::--:-------+**======%%%%%%%%%%%%%%%%%%===
                        ---::::---------+++***==%%%@@@@@@@@@@@@@@@@@%%%%%%%=
                      ----::---------++++++**==%%%%%@@@%%@@@@@@@@@@@@@@@%%%%%:
                  .--------------+++++++***====%%%%%%%%%%%%@%%%%@@@@@@@@@@@%%%%%=
                -------------+++++++++****=====%%%%%%%%%%%%%%%%%%@@@@@@@@@@%%%%%=
              +--------------++++++++******=====%=%%%%%%@@@@@@@@@@@@@@@@@@@@@@#@%=
            ++-------------+++++++++++****=*=======%%%@@@#################@#####@@%
            ++------------++++++++++++++****=======%%%@@@##########################@%
          .++-------------+++++++++++++****+***=*===%%@#########################=**=##
          +++-------------+++++++++++++++++*+***+===%@=@##=*++-+*%@############%===*=-:%
        ++--------------++++++++++*+++++-++-*=**===%@#==*******-*=@@###%####@@==%%@@%%+@
        +++--------------+++++++++++*+*+++-+-+=*==%%#%%%==**+*+++++=@@@@==%%%=@%@@@@@@%%=*
      +++---------------++++++++*+++***-+--++-**%@%%%%%=*++++++++*+=@====@@%%%%@@@@@@@@@@
      ++----------------+++++++++*******---+=-*%@@@%%%=+++++++++++***====+=*=====@@@@###@
      +++---------------++++++++++******++----+%@@@%%@%+++++++++++***-*=******==%##@@####@
      +++-----:----------++++++++********=+--++@@@@%@@@**++++++++*****++*=*=**==#*++@######
      ++----------------++++++++++*******===*+#@#@#@%@@%=**++++******+++=%==**=#+++++%@@@@@
      ++-----------------++++********=*======+@##@#@@@@%=++********++-+==@%*=@#----+++#%@=%%
      +-----:--------++++++++******+*====%%=*@###@@@@@==+*****++-----=@#%===#---+++++###@=++=
      ++--------------+++++++********===%%%%%=####@@%@==*+++++++--+%%@@#=%%%---++++++@#####@#@
        +---------------+++++++++***====%%%%%%+=@@===+**=*++---++@###@@##%@@#++-++++++%##@@####-
        -+-----:----------+++++++++**===%%%=%%%***%*****==@@@##@#####@%*#@@@@-++++++++%########@
        +-----::----------++++++++**===@@@%==%******=====##@@#####@%-##@@%@@++++++++++#%#######
          +----::----------+++++++++***==@@@==*++****====@###########%=#%%%%@@++++++++++@@#####@
          -----::-------++-++++++++++**%%@%+********====@@##########@=#=%%%%##%%+---+-#@#@#@@=*
            ----::----+++++++++++++*++*--+**+*****==*===@@@#########@@====%%@%@#@%#@@%%%%##
            ----:------+++*++++++++=----++******======%%@@##########@%%=*=%%%@@#@@#@%@@%@%@@
              --------++++--::-::..-=##@#::---+*========+%=-+-+-%##%%====*======@@%%@@%%#@@##@#
                --:-:-:++**%%@#@%=%-:**%==@=--++++**%%@#=%##+:-...:-:--+***=====@**=@#+%###%##@#
                  .-:--:-++@@@@@@@@%=@#:=++++--+++++**%%---++=-**%#.+=:----***--*@#+-=##+%######*%
                    .---:++*==%@@@@@+@*=*:+--+++++++**==%-:-==#++%@+-###*@#-=##++=@#-*##**==######%
                      --:-:-:++**%%@#@%=%-:--++
                      --:-:-:++**%%@#@%=%-:--++***                                            
                        --:-:-:++**%%@#@%=%-:--+++++****=%%=
                      ---:--*==@@@@@##+%=@-:--+++++****=%%=                   @+*##+=@#=@#*%#%#%##
                        -:---+==@@####%@==%--:-++++****=*==+     . .-:.- -:@-*#@+*##+=@#=@#*%#%#%##
                        :::::+=%@@####*==*++-:-++++********#++*=%#++=#+++=#--%#*+@#-*%@*=#@%@@#@#
                            ::::++%%%@@      :-:--+*++********%==**+-=*+++*+===*%**#%*%%@%@#@@@@@%@
                                ....:*        -::-++++++*+*++++*===========%=%%%@%==%@##@########@@
                                                .-::--++++++++++++**=====%===%%%%%%#@%@############@@
                                                  ---++--++++++++++++***=**%%=%%@%%%%@@@##@##########@@
                                                    --+++++++++++++++++=====%%%%@#@@%*@##@@###########@
                                                      --++++++++++++++=====%%%%@#@@%*@##@@##########@
                                                            ---------++++++=====%%%%@#@@%*@##@@###
    
                                                            -----------
                                                            ${config.name}
                                                            ﰩ ${config.ps1_hostname}
                                                            <u><a href="${config.site_urls.resume}" target="_blank">resume</a></u>
                                                            爵 <u><a href="${config.site_urls.repo}" target="_blank">Github repo</a></u>
                                                            -----------
                                                            SOCIAL
                                                            <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
                                                            <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                                                            -----------
                                                            CONTACT
                                                            <u><a href="${config.social.kofi}" target="_blank">${config.social.kofi}</a></u>
                                                            <u><a href="${config.social.patreon}" target="_blank">${config.social.patreon}</a></u>
                                                            sumfetch: summary display
    
`;
  }
};

export default about;
