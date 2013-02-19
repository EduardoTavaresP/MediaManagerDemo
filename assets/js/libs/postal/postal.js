  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>postal.js/lib/postal.js at master · postaljs/postal.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="1h3TTRyXtAaEc/6OxEfXVkkqnTarN/15LXrTYcQ3P4k=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-0c9d87dff5611078dcc29621367346a73a74b001.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-aa6e470c0369c01f9c62cc0cbccd30ce045f4177.css" media="screen" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-5dcdaf734c8092261f37e6534c8f114696d913a9.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-48cf9d3d3a4763f4c8546038b20b9716034b1c38.js" type="text/javascript"></script>
      

        <link rel='permalink' href='/postaljs/postal.js/blob/51a244c2105eaf05f15a5850a9950204a5944a9f/lib/postal.js'>
    <meta property="og:title" content="postal.js"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/postaljs/postal.js"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="postal.js - JavaScript pub/sub library supporting some advanced subscription features, plus message capture and replay"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="postaljs/postal.js"/>

    <meta name="description" content="postal.js - JavaScript pub/sub library supporting some advanced subscription features, plus message capture and replay" />

  <link href="https://github.com/postaljs/postal.js/commits/master.atom" rel="alternate" title="Recent Commits to postal.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-out">
          <div class="container clearfix">

            <a class="header-logo-wordmark" href="https://github.com/">
              <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1338945075" />
              <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1338945075" />
            </a>

              
<ul class="top-nav">
    <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
  <li class="search"><a href="https://github.com/search">Search</a></li>
  <li class="features"><a href="https://github.com/features">Features</a></li>
    <li class="blog"><a href="https://github.com/blog">Blog</a></li>
</ul>


            <div class="header-actions">
                <a class="button primary" href="https://github.com/signup">Sign up for free</a>
              <a class="button" href="https://github.com/login?return_to=%2Fpostaljs%2Fpostal.js%2Fblob%2Fmaster%2Flib%2Fpostal.js">Sign in</a>
            </div>

          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fpostaljs%2Fpostal.js"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/postaljs/postal.js/stargazers">
        301
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fpostaljs%2Fpostal.js"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/postaljs/postal.js/network" class="social-count">
        18
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/postaljs" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">postaljs</span>
                  </a></span> /
                <strong><a href="/postaljs/postal.js" class="js-current-repository">postal.js</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/postaljs/postal.js" class="selected" highlight="[:repo_source, :repo_downloads, :repo_commits, :repo_tags, :repo_branches]">Code</a></li>
    <li><a href="/postaljs/postal.js/network" highlight="[:repo_network]">Network</a></li>
    <li><a href="/postaljs/postal.js/pulls" highlight="[:repo_pulls]">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/postaljs/postal.js/issues" highlight="[:repo_issues]">Issues <span class='counter'>4</span></a></li>

      <li><a href="/postaljs/postal.js/wiki" highlight="[:repo_wiki]">Wiki</a></li>


    <li><a href="/postaljs/postal.js/graphs" highlight="[:repo_graphs, :repo_contributors]">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/postaljs/postal.js/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">13</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches" data-filterable-for="commitish-filter-field" data-filterable-type="substring">


              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/aggregate/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="aggregate" rel="nofollow" title="aggregate">aggregate</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/linked/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="linked" rel="nofollow" title="linked">linked</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/master/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/post-anvil/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="post-anvil" rel="nofollow" title="post-anvil">post-anvil</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.8.0RC/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.8.0RC" rel="nofollow" title="v0.8.0RC">v0.8.0RC</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags" data-filterable-for="commitish-filter-field" data-filterable-type="substring">

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.8.2/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.8.2" rel="nofollow" title="v0.8.2">v0.8.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.8.1/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.8.1" rel="nofollow" title="v0.8.1">v0.8.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.8.0/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.8.0" rel="nofollow" title="v0.8.0">v0.8.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.7.3/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.7.3" rel="nofollow" title="v0.7.3">v0.7.3</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.7.2/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.7.2" rel="nofollow" title="v0.7.2">v0.7.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.7.1/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.7.1" rel="nofollow" title="v0.7.1">v0.7.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.7.0/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.7.0" rel="nofollow" title="v0.7.0">v0.7.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.6.4/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.6.4" rel="nofollow" title="v0.6.4">v0.6.4</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.6.3/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.6.3" rel="nofollow" title="v0.6.3">v0.6.3</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.6.2/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.6.2" rel="nofollow" title="v0.6.2">v0.6.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.6.1/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.6.1" rel="nofollow" title="v0.6.1">v0.6.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.6.0/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.6.0" rel="nofollow" title="v0.6.0">v0.6.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/postaljs/postal.js/blob/v0.4.4/lib/postal.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.4.4" rel="nofollow" title="v0.4.4">v0.4.4</a>
              </div> <!-- /.select-menu-item -->

            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/postaljs/postal.js" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/postaljs/postal.js/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/postaljs/postal.js/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">5</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:2e0d52f6518794dd87b89582bb517c80 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:2e0d52f6518794dd87b89582bb517c80 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/postaljs/postal.js" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">postal.js</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/postaljs/postal.js/tree/master/lib" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">lib</span></a></span> / <strong class="final-path">postal.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="lib/postal.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/postaljs/postal.js/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/50f0d186eeb223478981dec5d786233b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/ifandelse" rel="author">ifandelse</a></span>
    <time class="js-relative-date" datetime="2013-01-15T17:15:06-08:00" title="2013-01-15 17:15:06">January 15, 2013</time>
    <div class="commit-title">
        <a href="/postaljs/postal.js/commit/51a244c2105eaf05f15a5850a9950204a5944a9f" class="message">Updated bug in Channel Definition publish, and fixed tests to catch it</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/50f0d186eeb223478981dec5d786233b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/ifandelse">ifandelse</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/postaljs/postal.js/blob/51a244c2105eaf05f15a5850a9950204a5944a9f/lib/postal.js" data-title="postal.js/lib/postal.js at master · postaljs/postal.js · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>395 lines (359 sloc)</span>
                <span>11.032 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/postaljs/postal.js/raw/master/lib/postal.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/postaljs/postal.js/blame/master/lib/postal.js" class="button minibutton ">Blame</a>
                  <a href="/postaljs/postal.js/commits/master/lib/postal.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> postal</span></div><div class='line' id='LC3'><span class="cm"> Author: Jim Cowart (http://freshbrewedcode.com/jimcowart)</span></div><div class='line' id='LC4'><span class="cm"> License: Dual licensed MIT (http://www.opensource.org/licenses/mit-license) &amp; GPL (http://www.opensource.org/licenses/gpl-license)</span></div><div class='line' id='LC5'><span class="cm"> Version 0.8.2</span></div><div class='line' id='LC6'><span class="cm"> */</span></div><div class='line' id='LC7'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span> <span class="nx">root</span><span class="p">,</span> <span class="nx">factory</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC8'>	<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">module</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'>		<span class="c1">// Node, or CommonJS-Like environments</span></div><div class='line' id='LC10'>		<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">_</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC11'>			<span class="nx">_</span> <span class="o">=</span> <span class="nx">_</span> <span class="o">||</span> <span class="nx">require</span><span class="p">(</span> <span class="s2">&quot;underscore&quot;</span> <span class="p">);</span></div><div class='line' id='LC12'>			<span class="k">return</span> <span class="nx">factory</span><span class="p">(</span> <span class="nx">_</span> <span class="p">);</span></div><div class='line' id='LC13'>		<span class="p">}</span></div><div class='line' id='LC14'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'>		<span class="c1">// AMD. Register as an anonymous module.</span></div><div class='line' id='LC16'>		<span class="nx">define</span><span class="p">(</span> <span class="p">[</span><span class="s2">&quot;underscore&quot;</span><span class="p">],</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">_</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'>			<span class="k">return</span> <span class="nx">factory</span><span class="p">(</span> <span class="nx">_</span><span class="p">,</span> <span class="nx">root</span> <span class="p">);</span></div><div class='line' id='LC18'>		<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC19'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC20'>		<span class="c1">// Browser globals</span></div><div class='line' id='LC21'>		<span class="nx">root</span><span class="p">.</span><span class="nx">postal</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span> <span class="nx">root</span><span class="p">.</span><span class="nx">_</span><span class="p">,</span> <span class="nx">root</span> <span class="p">);</span></div><div class='line' id='LC22'>	<span class="p">}</span></div><div class='line' id='LC23'><span class="p">}(</span> <span class="k">this</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">_</span><span class="p">,</span> <span class="nx">global</span><span class="p">,</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'>	<span class="kd">var</span> <span class="nx">DEFAULT_CHANNEL</span> <span class="o">=</span> <span class="s2">&quot;/&quot;</span><span class="p">,</span></div><div class='line' id='LC26'>		<span class="nx">DEFAULT_DISPOSEAFTER</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC27'>		<span class="nx">SYSTEM_CHANNEL</span> <span class="o">=</span> <span class="s2">&quot;postal&quot;</span><span class="p">;</span></div><div class='line' id='LC28'>	<span class="kd">var</span> <span class="nx">ConsecutiveDistinctPredicate</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC29'>		<span class="kd">var</span> <span class="nx">previous</span><span class="p">;</span></div><div class='line' id='LC30'>		<span class="k">return</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>			<span class="kd">var</span> <span class="nx">eq</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC32'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>				<span class="nx">eq</span> <span class="o">=</span> <span class="nx">data</span> <span class="o">===</span> <span class="nx">previous</span><span class="p">;</span></div><div class='line' id='LC34'>				<span class="nx">previous</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC35'>			<span class="p">}</span></div><div class='line' id='LC36'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC37'>				<span class="nx">eq</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isEqual</span><span class="p">(</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">previous</span> <span class="p">);</span></div><div class='line' id='LC38'>				<span class="nx">previous</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span> <span class="nx">data</span> <span class="p">);</span></div><div class='line' id='LC39'>			<span class="p">}</span></div><div class='line' id='LC40'>			<span class="k">return</span> <span class="o">!</span><span class="nx">eq</span><span class="p">;</span></div><div class='line' id='LC41'>		<span class="p">};</span></div><div class='line' id='LC42'>	<span class="p">};</span></div><div class='line' id='LC43'>	<span class="kd">var</span> <span class="nx">DistinctPredicate</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC44'>		<span class="kd">var</span> <span class="nx">previous</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>		<span class="k">return</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>			<span class="kd">var</span> <span class="nx">isDistinct</span> <span class="o">=</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span> <span class="nx">previous</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">p</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>					<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isEqual</span><span class="p">(</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">p</span> <span class="p">);</span></div><div class='line' id='LC50'>				<span class="p">}</span></div><div class='line' id='LC51'>				<span class="k">return</span> <span class="nx">data</span> <span class="o">===</span> <span class="nx">p</span><span class="p">;</span></div><div class='line' id='LC52'>			<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC53'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">isDistinct</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>				<span class="nx">previous</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">data</span> <span class="p">);</span></div><div class='line' id='LC55'>			<span class="p">}</span></div><div class='line' id='LC56'>			<span class="k">return</span> <span class="nx">isDistinct</span><span class="p">;</span></div><div class='line' id='LC57'>		<span class="p">};</span></div><div class='line' id='LC58'>	<span class="p">};</span></div><div class='line' id='LC59'>	<span class="kd">var</span> <span class="nx">ChannelDefinition</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">channelName</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>		<span class="k">this</span><span class="p">.</span><span class="nx">channel</span> <span class="o">=</span> <span class="nx">channelName</span> <span class="o">||</span> <span class="nx">DEFAULT_CHANNEL</span><span class="p">;</span></div><div class='line' id='LC61'>	<span class="p">};</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>	<span class="nx">ChannelDefinition</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">subscribe</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC64'>		<span class="k">return</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">?</span></div><div class='line' id='LC65'>		       <span class="k">new</span> <span class="nx">SubscriptionDefinition</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">channel</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">topic</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">callback</span> <span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC66'>		       <span class="k">new</span> <span class="nx">SubscriptionDefinition</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">channel</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC67'>	<span class="p">};</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>	<span class="nx">ChannelDefinition</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">publish</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC70'>		<span class="kd">var</span> <span class="nx">envelope</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">?</span></div><div class='line' id='LC71'>		                <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">===</span> <span class="s1">&#39;[object String]&#39;</span> <span class="o">?</span></div><div class='line' id='LC72'>	                  <span class="p">{</span> <span class="nx">topic</span><span class="o">:</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">}</span> <span class="o">:</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">:</span> <span class="p">{</span> <span class="nx">topic</span> <span class="o">:</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">data</span> <span class="o">:</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">};</span></div><div class='line' id='LC73'>		<span class="nx">envelope</span><span class="p">.</span><span class="nx">channel</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">channel</span><span class="p">;</span></div><div class='line' id='LC74'>		<span class="k">return</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">bus</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="nx">envelope</span> <span class="p">);</span></div><div class='line' id='LC75'>	<span class="p">};</span></div><div class='line' id='LC76'>	<span class="kd">var</span> <span class="nx">SubscriptionDefinition</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">channel</span><span class="p">,</span> <span class="nx">topic</span><span class="p">,</span> <span class="nx">callback</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC77'>		<span class="k">this</span><span class="p">.</span><span class="nx">channel</span> <span class="o">=</span> <span class="nx">channel</span><span class="p">;</span></div><div class='line' id='LC78'>		<span class="k">this</span><span class="p">.</span><span class="nx">topic</span> <span class="o">=</span> <span class="nx">topic</span><span class="p">;</span></div><div class='line' id='LC79'>		<span class="k">this</span><span class="p">.</span><span class="nx">callback</span> <span class="o">=</span> <span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC80'>		<span class="k">this</span><span class="p">.</span><span class="nx">constraints</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC81'>		<span class="k">this</span><span class="p">.</span><span class="nx">context</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC82'>		<span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">bus</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span></div><div class='line' id='LC83'>			<span class="nx">channel</span> <span class="o">:</span> <span class="nx">SYSTEM_CHANNEL</span><span class="p">,</span></div><div class='line' id='LC84'>			<span class="nx">topic</span> <span class="o">:</span> <span class="s2">&quot;subscription.created&quot;</span><span class="p">,</span></div><div class='line' id='LC85'>			<span class="nx">data</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC86'>				<span class="nx">event</span> <span class="o">:</span> <span class="s2">&quot;subscription.created&quot;</span><span class="p">,</span></div><div class='line' id='LC87'>				<span class="nx">channel</span> <span class="o">:</span> <span class="nx">channel</span><span class="p">,</span></div><div class='line' id='LC88'>				<span class="nx">topic</span> <span class="o">:</span> <span class="nx">topic</span></div><div class='line' id='LC89'>			<span class="p">}</span></div><div class='line' id='LC90'>		<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC91'>		<span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">bus</span><span class="p">.</span><span class="nx">subscribe</span><span class="p">(</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC92'>	<span class="p">};</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>	<span class="nx">SubscriptionDefinition</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC95'>		<span class="nx">unsubscribe</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC96'>			<span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">bus</span><span class="p">.</span><span class="nx">unsubscribe</span><span class="p">(</span> <span class="k">this</span> <span class="p">);</span></div><div class='line' id='LC97'>			<span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">bus</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="p">{</span></div><div class='line' id='LC98'>				<span class="nx">channel</span> <span class="o">:</span> <span class="nx">SYSTEM_CHANNEL</span><span class="p">,</span></div><div class='line' id='LC99'>				<span class="nx">topic</span> <span class="o">:</span> <span class="s2">&quot;subscription.removed&quot;</span><span class="p">,</span></div><div class='line' id='LC100'>				<span class="nx">data</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC101'>					<span class="nx">event</span> <span class="o">:</span> <span class="s2">&quot;subscription.removed&quot;</span><span class="p">,</span></div><div class='line' id='LC102'>					<span class="nx">channel</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">channel</span><span class="p">,</span></div><div class='line' id='LC103'>					<span class="nx">topic</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">topic</span></div><div class='line' id='LC104'>				<span class="p">}</span></div><div class='line' id='LC105'>			<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC106'>		<span class="p">},</span></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'>		<span class="nx">defer</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC109'>			<span class="kd">var</span> <span class="nx">fn</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC110'>			<span class="k">this</span><span class="p">.</span><span class="nx">callback</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>				<span class="nx">setTimeout</span><span class="p">(</span> <span class="nx">fn</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">data</span> <span class="p">);</span></div><div class='line' id='LC112'>			<span class="p">};</span></div><div class='line' id='LC113'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC114'>		<span class="p">},</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>		<span class="nx">disposeAfter</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">maxCalls</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nb">isNaN</span><span class="p">(</span> <span class="nx">maxCalls</span> <span class="p">)</span> <span class="o">||</span> <span class="nx">maxCalls</span> <span class="o">&lt;=</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC118'>				<span class="k">throw</span> <span class="s2">&quot;The value provided to disposeAfter (maxCalls) must be a number greater than zero.&quot;</span><span class="p">;</span></div><div class='line' id='LC119'>			<span class="p">}</span></div><div class='line' id='LC120'>			<span class="kd">var</span> <span class="nx">fn</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC121'>			<span class="kd">var</span> <span class="nx">dispose</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">after</span><span class="p">(</span> <span class="nx">maxCalls</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC122'>				<span class="k">this</span><span class="p">.</span><span class="nx">unsubscribe</span><span class="p">();</span></div><div class='line' id='LC123'>			<span class="p">},</span> <span class="k">this</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>			<span class="k">this</span><span class="p">.</span><span class="nx">callback</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC126'>				<span class="nx">fn</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">context</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC127'>				<span class="nx">dispose</span><span class="p">();</span></div><div class='line' id='LC128'>			<span class="p">};</span></div><div class='line' id='LC129'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC130'>		<span class="p">},</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>		<span class="nx">distinctUntilChanged</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC133'>			<span class="k">this</span><span class="p">.</span><span class="nx">withConstraint</span><span class="p">(</span> <span class="k">new</span> <span class="nx">ConsecutiveDistinctPredicate</span><span class="p">()</span> <span class="p">);</span></div><div class='line' id='LC134'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC135'>		<span class="p">},</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>		<span class="nx">distinct</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC138'>			<span class="k">this</span><span class="p">.</span><span class="nx">withConstraint</span><span class="p">(</span> <span class="k">new</span> <span class="nx">DistinctPredicate</span><span class="p">()</span> <span class="p">);</span></div><div class='line' id='LC139'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC140'>		<span class="p">},</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>		<span class="nx">once</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC143'>			<span class="k">this</span><span class="p">.</span><span class="nx">disposeAfter</span><span class="p">(</span> <span class="mi">1</span> <span class="p">);</span></div><div class='line' id='LC144'>		<span class="p">},</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'>		<span class="nx">withConstraint</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">predicate</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">predicate</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC148'>				<span class="k">throw</span> <span class="s2">&quot;Predicate constraint must be a function&quot;</span><span class="p">;</span></div><div class='line' id='LC149'>			<span class="p">}</span></div><div class='line' id='LC150'>			<span class="k">this</span><span class="p">.</span><span class="nx">constraints</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">predicate</span> <span class="p">);</span></div><div class='line' id='LC151'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC152'>		<span class="p">},</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>		<span class="nx">withConstraints</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">predicates</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC155'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC156'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span> <span class="nx">predicates</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC157'>				<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">predicates</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">predicate</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC158'>					<span class="nx">self</span><span class="p">.</span><span class="nx">withConstraint</span><span class="p">(</span> <span class="nx">predicate</span> <span class="p">);</span></div><div class='line' id='LC159'>				<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC160'>			<span class="p">}</span></div><div class='line' id='LC161'>			<span class="k">return</span> <span class="nx">self</span><span class="p">;</span></div><div class='line' id='LC162'>		<span class="p">},</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'>		<span class="nx">withContext</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">context</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC165'>			<span class="k">this</span><span class="p">.</span><span class="nx">context</span> <span class="o">=</span> <span class="nx">context</span><span class="p">;</span></div><div class='line' id='LC166'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC167'>		<span class="p">},</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'>		<span class="nx">withDebounce</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">milliseconds</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC170'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nb">isNaN</span><span class="p">(</span> <span class="nx">milliseconds</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'>				<span class="k">throw</span> <span class="s2">&quot;Milliseconds must be a number&quot;</span><span class="p">;</span></div><div class='line' id='LC172'>			<span class="p">}</span></div><div class='line' id='LC173'>			<span class="kd">var</span> <span class="nx">fn</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC174'>			<span class="k">this</span><span class="p">.</span><span class="nx">callback</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">debounce</span><span class="p">(</span> <span class="nx">fn</span><span class="p">,</span> <span class="nx">milliseconds</span> <span class="p">);</span></div><div class='line' id='LC175'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC176'>		<span class="p">},</span></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'>		<span class="nx">withDelay</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">milliseconds</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nb">isNaN</span><span class="p">(</span> <span class="nx">milliseconds</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC180'>				<span class="k">throw</span> <span class="s2">&quot;Milliseconds must be a number&quot;</span><span class="p">;</span></div><div class='line' id='LC181'>			<span class="p">}</span></div><div class='line' id='LC182'>			<span class="kd">var</span> <span class="nx">fn</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC183'>			<span class="k">this</span><span class="p">.</span><span class="nx">callback</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC184'>				<span class="nx">setTimeout</span><span class="p">(</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC185'>					<span class="nx">fn</span><span class="p">(</span> <span class="nx">data</span> <span class="p">);</span></div><div class='line' id='LC186'>				<span class="p">},</span> <span class="nx">milliseconds</span> <span class="p">);</span></div><div class='line' id='LC187'>			<span class="p">};</span></div><div class='line' id='LC188'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC189'>		<span class="p">},</span></div><div class='line' id='LC190'><br/></div><div class='line' id='LC191'>		<span class="nx">withThrottle</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">milliseconds</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC192'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nb">isNaN</span><span class="p">(</span> <span class="nx">milliseconds</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC193'>				<span class="k">throw</span> <span class="s2">&quot;Milliseconds must be a number&quot;</span><span class="p">;</span></div><div class='line' id='LC194'>			<span class="p">}</span></div><div class='line' id='LC195'>			<span class="kd">var</span> <span class="nx">fn</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC196'>			<span class="k">this</span><span class="p">.</span><span class="nx">callback</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">throttle</span><span class="p">(</span> <span class="nx">fn</span><span class="p">,</span> <span class="nx">milliseconds</span> <span class="p">);</span></div><div class='line' id='LC197'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC198'>		<span class="p">},</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>		<span class="nx">subscribe</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC201'>			<span class="k">this</span><span class="p">.</span><span class="nx">callback</span> <span class="o">=</span> <span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC202'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC203'>		<span class="p">}</span></div><div class='line' id='LC204'>	<span class="p">};</span></div><div class='line' id='LC205'>	<span class="kd">var</span> <span class="nx">bindingsResolver</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC206'>		<span class="nx">cache</span> <span class="o">:</span> <span class="p">{</span> <span class="p">},</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'>		<span class="nx">compare</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">binding</span><span class="p">,</span> <span class="nx">topic</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC209'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">topic</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">topic</span><span class="p">][</span><span class="nx">binding</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC210'>				<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC211'>			<span class="p">}</span></div><div class='line' id='LC212'>			<span class="kd">var</span> <span class="nx">pattern</span> <span class="o">=</span> <span class="p">(</span><span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="nx">binding</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/\./g</span><span class="p">,</span> <span class="s2">&quot;\\.&quot;</span> <span class="p">)</span>            <span class="c1">// escape actual periods</span></div><div class='line' id='LC213'>				                        <span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/\*/g</span><span class="p">,</span> <span class="s2">&quot;[A-Z,a-z,0-9]*&quot;</span> <span class="p">)</span> <span class="c1">// asterisks match any alpha-numeric &#39;word&#39;</span></div><div class='line' id='LC214'>				                        <span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/#/g</span><span class="p">,</span> <span class="s2">&quot;.*&quot;</span> <span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;$&quot;</span><span class="p">)</span>       <span class="c1">// hash matches &#39;n&#39; # of words (+ optional on start/end of topic)</span></div><div class='line' id='LC215'>				                        <span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="s2">&quot;\\..*$&quot;</span><span class="p">,</span> <span class="s2">&quot;(\\..*)*$&quot;</span> <span class="p">)</span>   <span class="c1">// fix end of topic matching on hash wildcards</span></div><div class='line' id='LC216'>				                        <span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="s2">&quot;^.*\\.&quot;</span><span class="p">,</span> <span class="s2">&quot;^(.*\\.)*&quot;</span> <span class="p">);</span>  <span class="c1">// fix beginning of topic matching on hash wildcards</span></div><div class='line' id='LC217'>			<span class="kd">var</span> <span class="nx">rgx</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="nx">pattern</span> <span class="p">);</span></div><div class='line' id='LC218'>			<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">rgx</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">topic</span> <span class="p">);</span></div><div class='line' id='LC219'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">result</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>				<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">topic</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC221'>					<span class="k">this</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">topic</span><span class="p">]</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC222'>				<span class="p">}</span></div><div class='line' id='LC223'>				<span class="k">this</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">topic</span><span class="p">][</span><span class="nx">binding</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC224'>			<span class="p">}</span></div><div class='line' id='LC225'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC226'>		<span class="p">},</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'>		<span class="nx">reset</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC229'>			<span class="k">this</span><span class="p">.</span><span class="nx">cache</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC230'>		<span class="p">}</span></div><div class='line' id='LC231'>	<span class="p">};</span></div><div class='line' id='LC232'>	<span class="kd">var</span> <span class="nx">fireSub</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">subDef</span><span class="p">,</span> <span class="nx">envelope</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC233'>	  <span class="k">if</span> <span class="p">(</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">resolver</span><span class="p">.</span><span class="nx">compare</span><span class="p">(</span> <span class="nx">subDef</span><span class="p">.</span><span class="nx">topic</span><span class="p">,</span> <span class="nx">envelope</span><span class="p">.</span><span class="nx">topic</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC234'>	    <span class="k">if</span> <span class="p">(</span> <span class="nx">_</span><span class="p">.</span><span class="nx">all</span><span class="p">(</span> <span class="nx">subDef</span><span class="p">.</span><span class="nx">constraints</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">constraint</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC235'>	      <span class="k">return</span> <span class="nx">constraint</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">subDef</span><span class="p">.</span><span class="nx">context</span><span class="p">,</span> <span class="nx">envelope</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="nx">envelope</span> <span class="p">);</span></div><div class='line' id='LC236'>	    <span class="p">}</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC237'>	      <span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">subDef</span><span class="p">.</span><span class="nx">callback</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC238'>	        <span class="nx">subDef</span><span class="p">.</span><span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">subDef</span><span class="p">.</span><span class="nx">context</span><span class="p">,</span> <span class="nx">envelope</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="nx">envelope</span> <span class="p">);</span></div><div class='line' id='LC239'>	      <span class="p">}</span></div><div class='line' id='LC240'>	    <span class="p">}</span></div><div class='line' id='LC241'>	  <span class="p">}</span></div><div class='line' id='LC242'>	<span class="p">};</span></div><div class='line' id='LC243'><br/></div><div class='line' id='LC244'>	<span class="kd">var</span> <span class="nx">localBus</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC245'>		<span class="nx">addWireTap</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC246'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC247'>			<span class="nx">self</span><span class="p">.</span><span class="nx">wireTaps</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">);</span></div><div class='line' id='LC248'>			<span class="k">return</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC249'>				<span class="kd">var</span> <span class="nx">idx</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">wireTaps</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">);</span></div><div class='line' id='LC250'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">idx</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC251'>					<span class="nx">self</span><span class="p">.</span><span class="nx">wireTaps</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span> <span class="nx">idx</span><span class="p">,</span> <span class="mi">1</span> <span class="p">);</span></div><div class='line' id='LC252'>				<span class="p">}</span></div><div class='line' id='LC253'>			<span class="p">};</span></div><div class='line' id='LC254'>		<span class="p">},</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'>		<span class="nx">publish</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">envelope</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC257'>			<span class="nx">envelope</span><span class="p">.</span><span class="nx">timeStamp</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC258'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">wireTaps</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">tap</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC259'>				<span class="nx">tap</span><span class="p">(</span> <span class="nx">envelope</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="nx">envelope</span> <span class="p">);</span></div><div class='line' id='LC260'>			<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC261'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span><span class="nx">envelope</span><span class="p">.</span><span class="nx">channel</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'>	      <span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span><span class="nx">envelope</span><span class="p">.</span><span class="nx">channel</span><span class="p">],</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">subscribers</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC263'>	        <span class="kd">var</span> <span class="nx">idx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">subscribers</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">subDef</span><span class="p">;</span></div><div class='line' id='LC264'>	        <span class="k">while</span><span class="p">(</span><span class="nx">idx</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC265'>	          <span class="k">if</span><span class="p">(</span> <span class="nx">subDef</span> <span class="o">=</span> <span class="nx">subscribers</span><span class="p">[</span><span class="nx">idx</span><span class="o">++</span><span class="p">]</span> <span class="p">){</span></div><div class='line' id='LC266'>	            <span class="nx">fireSub</span><span class="p">(</span><span class="nx">subDef</span><span class="p">,</span> <span class="nx">envelope</span><span class="p">);</span></div><div class='line' id='LC267'>	          <span class="p">}</span></div><div class='line' id='LC268'>	        <span class="p">}</span></div><div class='line' id='LC269'>	      <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC270'>			<span class="p">}</span></div><div class='line' id='LC271'>			<span class="k">return</span> <span class="nx">envelope</span><span class="p">;</span></div><div class='line' id='LC272'>		<span class="p">},</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'>		<span class="nx">reset</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC275'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC276'>				<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">channel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC277'>					<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">channel</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">topic</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC278'>						<span class="k">while</span> <span class="p">(</span> <span class="nx">topic</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC279'>							<span class="nx">topic</span><span class="p">.</span><span class="nx">pop</span><span class="p">().</span><span class="nx">unsubscribe</span><span class="p">();</span></div><div class='line' id='LC280'>						<span class="p">}</span></div><div class='line' id='LC281'>					<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC282'>				<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC283'>				<span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC284'>			<span class="p">}</span></div><div class='line' id='LC285'>		<span class="p">},</span></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'>		<span class="nx">subscribe</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">subDef</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC288'>			<span class="kd">var</span> <span class="nx">idx</span><span class="p">,</span> <span class="nx">found</span><span class="p">,</span> <span class="nx">fn</span><span class="p">,</span> <span class="nx">channel</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span><span class="nx">subDef</span><span class="p">.</span><span class="nx">channel</span><span class="p">],</span> <span class="nx">subs</span><span class="p">;</span></div><div class='line' id='LC289'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">channel</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC290'>				<span class="nx">channel</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span><span class="nx">subDef</span><span class="p">.</span><span class="nx">channel</span><span class="p">]</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC291'>			<span class="p">}</span></div><div class='line' id='LC292'>			<span class="nx">subs</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span><span class="nx">subDef</span><span class="p">.</span><span class="nx">channel</span><span class="p">][</span><span class="nx">subDef</span><span class="p">.</span><span class="nx">topic</span><span class="p">];</span></div><div class='line' id='LC293'>			<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">subs</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC294'>				<span class="nx">subs</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span><span class="nx">subDef</span><span class="p">.</span><span class="nx">channel</span><span class="p">][</span><span class="nx">subDef</span><span class="p">.</span><span class="nx">topic</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC295'>			<span class="p">}</span></div><div class='line' id='LC296'>			<span class="nx">subs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">subDef</span> <span class="p">);</span></div><div class='line' id='LC297'>			<span class="k">return</span> <span class="nx">subDef</span><span class="p">;</span></div><div class='line' id='LC298'>		<span class="p">},</span></div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>		<span class="nx">subscriptions</span> <span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'>		<span class="nx">wireTaps</span> <span class="o">:</span> <span class="p">[],</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>		<span class="nx">unsubscribe</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">config</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC305'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span><span class="nx">config</span><span class="p">.</span><span class="nx">channel</span><span class="p">][</span><span class="nx">config</span><span class="p">.</span><span class="nx">topic</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC306'>				<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span><span class="nx">config</span><span class="p">.</span><span class="nx">channel</span><span class="p">][</span><span class="nx">config</span><span class="p">.</span><span class="nx">topic</span><span class="p">].</span><span class="nx">length</span><span class="p">,</span></div><div class='line' id='LC307'>					<span class="nx">idx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC308'>				<span class="k">for</span> <span class="p">(</span> <span class="p">;</span> <span class="nx">idx</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">idx</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC309'>					<span class="k">if</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span><span class="nx">config</span><span class="p">.</span><span class="nx">channel</span><span class="p">][</span><span class="nx">config</span><span class="p">.</span><span class="nx">topic</span><span class="p">][</span><span class="nx">idx</span><span class="p">]</span> <span class="o">===</span> <span class="nx">config</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC310'>						<span class="k">this</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span><span class="nx">config</span><span class="p">.</span><span class="nx">channel</span><span class="p">][</span><span class="nx">config</span><span class="p">.</span><span class="nx">topic</span><span class="p">].</span><span class="nx">splice</span><span class="p">(</span> <span class="nx">idx</span><span class="p">,</span> <span class="mi">1</span> <span class="p">);</span></div><div class='line' id='LC311'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC312'>					<span class="p">}</span></div><div class='line' id='LC313'>				<span class="p">}</span></div><div class='line' id='LC314'>			<span class="p">}</span></div><div class='line' id='LC315'>		<span class="p">}</span></div><div class='line' id='LC316'>	<span class="p">};</span></div><div class='line' id='LC317'>	<span class="nx">localBus</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span><span class="nx">SYSTEM_CHANNEL</span><span class="p">]</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC318'>	<span class="kd">var</span> <span class="nx">postal</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC319'>		<span class="nx">configuration</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC320'>			<span class="nx">bus</span> <span class="o">:</span> <span class="nx">localBus</span><span class="p">,</span></div><div class='line' id='LC321'>			<span class="nx">resolver</span> <span class="o">:</span> <span class="nx">bindingsResolver</span><span class="p">,</span></div><div class='line' id='LC322'>			<span class="nx">DEFAULT_CHANNEL</span> <span class="o">:</span> <span class="nx">DEFAULT_CHANNEL</span><span class="p">,</span></div><div class='line' id='LC323'>			<span class="nx">SYSTEM_CHANNEL</span> <span class="o">:</span> <span class="nx">SYSTEM_CHANNEL</span></div><div class='line' id='LC324'>		<span class="p">},</span></div><div class='line' id='LC325'><br/></div><div class='line' id='LC326'>		<span class="nx">ChannelDefinition</span> <span class="o">:</span> <span class="nx">ChannelDefinition</span><span class="p">,</span></div><div class='line' id='LC327'>		<span class="nx">SubscriptionDefinition</span> <span class="o">:</span> <span class="nx">SubscriptionDefinition</span><span class="p">,</span></div><div class='line' id='LC328'><br/></div><div class='line' id='LC329'>		<span class="nx">channel</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">channelName</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC330'>			<span class="k">return</span> <span class="k">new</span> <span class="nx">ChannelDefinition</span><span class="p">(</span> <span class="nx">channelName</span> <span class="p">);</span></div><div class='line' id='LC331'>		<span class="p">},</span></div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>		<span class="nx">subscribe</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC334'>			<span class="k">return</span> <span class="k">new</span> <span class="nx">SubscriptionDefinition</span><span class="p">(</span> <span class="nx">options</span><span class="p">.</span><span class="nx">channel</span> <span class="o">||</span> <span class="nx">DEFAULT_CHANNEL</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">topic</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">callback</span> <span class="p">);</span></div><div class='line' id='LC335'>		<span class="p">},</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>		<span class="nx">publish</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">envelope</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC338'>			<span class="nx">envelope</span><span class="p">.</span><span class="nx">channel</span> <span class="o">=</span> <span class="nx">envelope</span><span class="p">.</span><span class="nx">channel</span> <span class="o">||</span> <span class="nx">DEFAULT_CHANNEL</span><span class="p">;</span></div><div class='line' id='LC339'>			<span class="k">return</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">bus</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="nx">envelope</span> <span class="p">);</span></div><div class='line' id='LC340'>		<span class="p">},</span></div><div class='line' id='LC341'><br/></div><div class='line' id='LC342'>		<span class="nx">addWireTap</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC343'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">bus</span><span class="p">.</span><span class="nx">addWireTap</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">);</span></div><div class='line' id='LC344'>		<span class="p">},</span></div><div class='line' id='LC345'><br/></div><div class='line' id='LC346'>		<span class="nx">linkChannels</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">sources</span><span class="p">,</span> <span class="nx">destinations</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC347'>			<span class="kd">var</span> <span class="nx">result</span>   <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC348'>			<span class="nx">sources</span>      <span class="o">=</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span> <span class="nx">sources</span> <span class="p">)</span> <span class="o">?</span> <span class="p">[</span><span class="nx">sources</span><span class="p">]</span> <span class="o">:</span> <span class="nx">sources</span><span class="p">;</span></div><div class='line' id='LC349'>			<span class="nx">destinations</span> <span class="o">=</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span> <span class="nx">destinations</span> <span class="p">)</span> <span class="o">?</span> <span class="p">[</span><span class="nx">destinations</span><span class="p">]</span> <span class="o">:</span> <span class="nx">destinations</span><span class="p">;</span></div><div class='line' id='LC350'>			<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">sources</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">source</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC351'>				<span class="kd">var</span> <span class="nx">sourceTopic</span> <span class="o">=</span> <span class="nx">source</span><span class="p">.</span><span class="nx">topic</span> <span class="o">||</span> <span class="s2">&quot;#&quot;</span><span class="p">;</span></div><div class='line' id='LC352'>				<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">destinations</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">destination</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC353'>					<span class="kd">var</span> <span class="nx">destChannel</span> <span class="o">=</span> <span class="nx">destination</span><span class="p">.</span><span class="nx">channel</span> <span class="o">||</span> <span class="nx">DEFAULT_CHANNEL</span><span class="p">;</span></div><div class='line' id='LC354'>					<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></div><div class='line' id='LC355'>						<span class="nx">postal</span><span class="p">.</span><span class="nx">subscribe</span><span class="p">(</span> <span class="p">{</span></div><div class='line' id='LC356'>							<span class="nx">channel</span> <span class="o">:</span> <span class="nx">source</span><span class="p">.</span><span class="nx">channel</span> <span class="o">||</span> <span class="nx">DEFAULT_CHANNEL</span><span class="p">,</span></div><div class='line' id='LC357'>							<span class="nx">topic</span> <span class="o">:</span> <span class="nx">source</span><span class="p">.</span><span class="nx">topic</span> <span class="o">||</span> <span class="s2">&quot;#&quot;</span><span class="p">,</span></div><div class='line' id='LC358'>							<span class="nx">callback</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">env</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC359'>								<span class="kd">var</span> <span class="nx">newEnv</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span> <span class="nx">env</span> <span class="p">);</span></div><div class='line' id='LC360'>								<span class="nx">newEnv</span><span class="p">.</span><span class="nx">topic</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span> <span class="nx">destination</span><span class="p">.</span><span class="nx">topic</span> <span class="p">)</span> <span class="o">?</span> <span class="nx">destination</span><span class="p">.</span><span class="nx">topic</span><span class="p">(</span> <span class="nx">env</span><span class="p">.</span><span class="nx">topic</span> <span class="p">)</span> <span class="o">:</span> <span class="nx">destination</span><span class="p">.</span><span class="nx">topic</span> <span class="o">||</span> <span class="nx">env</span><span class="p">.</span><span class="nx">topic</span><span class="p">;</span></div><div class='line' id='LC361'>								<span class="nx">newEnv</span><span class="p">.</span><span class="nx">channel</span> <span class="o">=</span> <span class="nx">destChannel</span><span class="p">;</span></div><div class='line' id='LC362'>								<span class="nx">newEnv</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC363'>								<span class="nx">postal</span><span class="p">.</span><span class="nx">publish</span><span class="p">(</span> <span class="nx">newEnv</span> <span class="p">);</span></div><div class='line' id='LC364'>							<span class="p">}</span></div><div class='line' id='LC365'>						<span class="p">}</span> <span class="p">)</span></div><div class='line' id='LC366'>					<span class="p">);</span></div><div class='line' id='LC367'>				<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC368'>			<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC369'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC370'>		<span class="p">},</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>		<span class="nx">utils</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC373'>			<span class="nx">getSubscribersFor</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC374'>				<span class="kd">var</span> <span class="nx">channel</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span> <span class="mi">0</span> <span class="p">],</span></div><div class='line' id='LC375'>					<span class="nx">tpc</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span> <span class="mi">1</span> <span class="p">];</span></div><div class='line' id='LC376'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC377'>					<span class="nx">channel</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">channel</span> <span class="o">||</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">DEFAULT_CHANNEL</span><span class="p">;</span></div><div class='line' id='LC378'>					<span class="nx">tpc</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">topic</span><span class="p">;</span></div><div class='line' id='LC379'>				<span class="p">}</span></div><div class='line' id='LC380'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">bus</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span> <span class="nx">channel</span> <span class="p">]</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC381'>				     <span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">bus</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span> <span class="nx">channel</span> <span class="p">].</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">tpc</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC382'>					<span class="k">return</span> <span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">bus</span><span class="p">.</span><span class="nx">subscriptions</span><span class="p">[</span> <span class="nx">channel</span> <span class="p">][</span> <span class="nx">tpc</span> <span class="p">];</span></div><div class='line' id='LC383'>				<span class="p">}</span></div><div class='line' id='LC384'>				<span class="k">return</span> <span class="p">[];</span></div><div class='line' id='LC385'>			<span class="p">},</span></div><div class='line' id='LC386'><br/></div><div class='line' id='LC387'>			<span class="nx">reset</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC388'>				<span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">bus</span><span class="p">.</span><span class="nx">reset</span><span class="p">();</span></div><div class='line' id='LC389'>				<span class="nx">postal</span><span class="p">.</span><span class="nx">configuration</span><span class="p">.</span><span class="nx">resolver</span><span class="p">.</span><span class="nx">reset</span><span class="p">();</span></div><div class='line' id='LC390'>			<span class="p">}</span></div><div class='line' id='LC391'>		<span class="p">}</span></div><div class='line' id='LC392'>	<span class="p">};</span></div><div class='line' id='LC393'><br/></div><div class='line' id='LC394'>	<span class="k">return</span> <span class="nx">postal</span><span class="p">;</span></div><div class='line' id='LC395'><span class="p">}</span> <span class="p">));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04496s from fe2.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/postaljs/postal.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.04544' data-host='fe2'></span>
    
  </body>
</html>

