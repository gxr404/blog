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
}
.project-item {
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  cursor: pointer;
  transition: all 0.2s;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.project-item:hover {
  border-color: black;
  /* background-color: black; */
  /* border-color: #ccc;
  background-color: #ccc; */
}
.project-item:hover .tit {
  /* color: white; */
}
.project-item:hover .tit , .project-item:hover .desc {
  color: black;
}
.project-item .tit {
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
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
