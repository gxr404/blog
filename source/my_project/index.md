---
title: 我的开源项目
comments: false
---

<script>
  window.addEventListener('load', init)
  // document.addEventListener('pjax:complete', init)
  function init() {
    document.querySelector('.project-list').addEventListener('click', function(e) {
      console.log(e)
      console.log(e.target)
      console.log(e.currentTarget)
      const targetEl = e.target
      if (targetEl.dataset['github']) {
        goUrl(targetEl.dataset['github'])
      } else {
        const projectItem = targetEl.closest('.project-item')
        const githubUrl = projectItem.dataset['github']
        goUrl(githubUrl)
      }
      return false
    })
    loadProjectList(projectList)
  }
  function goUrl(url) {
    if (!url) return
    window.open(url, '_blank')
  }
  function genUrlGroup (projectName) {
    return {
      repo: `https://github.com/gxr404/${projectName}`,
      star: `https://img.shields.io/github/stars/gxr404/${projectName}`,
      fork: `https://img.shields.io/github/forks/gxr404/${projectName}`,
    }
  }
  const projectList = [
    {
      name: 'yuque-dl',
      desc: 'yuque 语雀知识库下载',
      ...genUrlGroup('yuque-dl')
    },
    {
      name: 'gen-short-vid',
      desc: '便捷生成短视频',
      ...genUrlGroup('gen-short-vid')
    },
    {
      name: 'BilibiliVideoDownloadFork',
      desc: 'fork自BilibiliVideoDownload, 为了修复已知bug',
      ...genUrlGroup('BilibiliVideoDownloadFork')
    },
    {
      name: 'blockchain-tool',
      desc: '区块链工具集',
      ...genUrlGroup('blockchain-tool')
    },
    {
      name: 'comic-book-dl',
      desc: '漫画下载器',
      ...genUrlGroup('comic-book-dl')
    },
    {
      name: 'comic-book-browser',
      desc: '与comic-book-dl搭配使用的漫画浏览器',
      ...genUrlGroup('comic-book-dl')
    },
    {
      name: 'github-activity',
      desc: '查看github用户最近动态Web服务',
      ...genUrlGroup('github-activity')
    },
    {
      name: 'github-activity-webext',
      desc: '搭配github-activity的浏览器插件',
      ...genUrlGroup('github-activity-webext')
    },
    {
      name: 'doc-dl',
      desc: '将文章以markdown的格式保存到本地',
      ...genUrlGroup('doc-dl')
    },
    {
      name: 'md-to-anki',
      desc: '从markdown文件生成anki卡片',
      ...genUrlGroup('md-to-anki')
    },
    {
      name: 'Dict2AnkiFork',
      desc: 'fork Dict2Anki 修bug',
      ...genUrlGroup('Dict2AnkiFork')
    },
  ]

  function loadProjectList(projectList) {
    const listEl = document.querySelector('.project-list')
    let listContent = ''
    projectList.forEach(function(item) {
      listContent += genTemplate(item)
    })
    listEl.innerHTML = listContent
  }
  function genTemplate(item) {
    return `
      <div class="project-item" data-github="${item.repo}">
        <div>
          <p class="tit">${item.name}</p>
          <p class="desc">${item.desc}</p>
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.747 4h3.464a.75.75 0 0 1 .102 1.493l-.102.007H6.747a2.25 2.25 0 0 0-2.245 2.095l-.005.155v9.5a2.25 2.25 0 0 0 2.096 2.244l.154.006h9.5a2.25 2.25 0 0 0 2.246-2.096l.005-.154v-.498a.75.75 0 0 1 1.493-.102l.007.102v.498a3.75 3.75 0 0 1-3.551 3.744l-.2.006h-9.5a3.75 3.75 0 0 1-3.745-3.551l-.005-.2v-9.5a3.75 3.75 0 0 1 3.55-3.744zh3.464zm7.754 2.544V3.75a.75.75 0 0 1 1.187-.61l.082.068l5.995 5.75c.28.269.305.7.076.998l-.076.085l-5.995 5.752a.75.75 0 0 1-1.262-.435l-.007-.107V12.45l-.32-.007c-2.658-.008-4.93 1.084-6.866 3.302c-.495.567-1.425.131-1.305-.613c.827-5.14 3.599-8.044 8.19-8.558zV3.75z"/></svg>
          </div>
        </div>
        <p class="state not-zoom">
          <img alt="GitHub Repo stars" src="${item.star}">
          <img alt="GitHub forks" src="${item.fork}">
        </p>
      </div>`
  }

</script>

<div class="project-list"></div>

<style>
p {
  padding: 0;
  margin: 0;
}
.project-list {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  width:620px;
  margin: 0 auto;
  padding-bottom: 100px;
}
.project-item {
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 300px;
  cursor: pointer;
  transition: all 0.2s;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
}
.project-item:hover {
  border-color: black;
  transform: scale(1.02);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1);

}
.project-item:hover .tit {
  /* color: white; */
}
.project-item:hover .tit , .project-item:hover .desc {
  /* color: black; */
}
.project-item:hover .icon {
  color: black;
}
.project-item .tit {
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
}
.project-item .icon {
  position: absolute;
  right: 0;
  top: 0;
  color: #ccc;
}
.project-item .icon svg {
  transform: scale(0.7);
}
.project-item .desc {
  font-size: 14px;
  line-height: 20px;
  color: gray;
  margin-top: 4px;
}
.project-item .state {
 line-height: 0;
 margin-top: 16px
}
.project-item .state img {
  display: inline-block;
  border-radius: 0;
  margin: 0 10px 0 0;
}
</style>
