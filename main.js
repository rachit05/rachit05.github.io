let iam = ['Singer','Web Developer','Guitarist', 'Song-Writer','Motivator'];
        let displayArea = document.getElementById('whatAmI');
        let counter = 0;
        setInterval(showMyInfo,1000)

        function showMyInfo(){
            displayArea.innerHTML = iam[counter];
            counter++;
            if(counter > iam.length - 1){
                counter = 0;
            }
        }


        let moBtn = document.getElementById('phoneMenuBtn')
        let mcBtn = document.getElementById('closePhoneMenu')

        moBtn.addEventListener('click',openMenu)
        mcBtn.addEventListener('click',closeMenu)

        function openMenu(){
            document.querySelector('.navItems').classList.add('dg');
            setTimeout(()=>{
                document.querySelector('.navItems').classList.add('open');
            },50)
        }
        function closeMenu(){
            document.querySelector('.navItems').classList.remove('open');
            setTimeout(()=>{
                document.querySelector('.navItems').classList.remove('dg');
            },50)
        }