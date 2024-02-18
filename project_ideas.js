var ideasList = ['an alarm clock for my friends cos they are always late to 8:30am lectures',
                 'device to let my roomate spy on the loud people outside our door',
                'a complicated tip calculator',
                'to do list application because I have the memory of a gold fish',
                'to do list application because I have the memory of a gold fish',
                'wordle but more relatable (dont ask me what this means)',
                'can i train generative ai to make art by my style that would be cool',
                'a bowling ball which makes me win every time because im starting to get sick of losing' ];

var display_list = document.getElementById('project_ideas');

let insideHtml = '';

function ideasListUpdate(){
  display_list.innerHTML = ' ';

  for (i=0; i<ideasList.length; i++){
    insideHtml += `
      <div class="projects-ideas-cardDisplay">
        ${ideasList[i]}
      </div>
      `
    //   console.log(ideasList[i]);

  }
  display_list.innerHTML = insideHtml;
}



ideasListUpdate();