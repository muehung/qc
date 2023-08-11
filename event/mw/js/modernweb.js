const api_url = 'https://ccmsapi.ithome.com.tw/'
var modernweb = new Vue({
  el: '#modernweb2021',
  data() {
    return {
      partnerList: [],
      newsList: [],
      articleIDList:[] ,
      sponsorIDList:[],
      block: false
    }
  },
  methods: {
    getPartner() {
      axios({
          url: api_url,
          method: 'post',
          data: {
            query: `query gets {
                    getProject: modernweb2021(lang: tw) {
                        levels {
                        name
                        sort
                        sponsors {
                          id
                          vendor {
                            id
                            sort_name
                            show_name
                            introduction
                            link_website
                            logo{
                              url
                            }
                          }
                          talents {
                            link_104_company
                          }
                        }
                      }
                    }
                  }`,
          }
        })
        .then(response => (this.partnerList = response.data.data.getProject.levels))
        .catch(function (error) {
          console.log(error);
        });
    },
    getSponInnerPage() {
      let link = window.location.pathname.split('/')
      let sponsorInnerPage = link[link.length - 1]
      if (sponsorInnerPage === 'sponsor-inner.html') {
        let hash = window.location.hash
        let getSponsorID = hash.substr(2, hash.length)
        axios({
            url: api_url,
            method: 'post',
            data: {
              query: `query gets {
                getSponsor: modernweb2021(lang: tw) {
                  sponsors(id: ${getSponsorID}) {
                    id
                    booth_num
                    exhibition_area
                    sales_name
                    sales_title
                    contact_phone
                    contact_email
                    levels {
                      levelGroup{
                        tw_name
                      }
                      tw_name
                    }
                    vendor {
                        id
                        show_name
                        en_show_name: show_name(lang: en)
                        contact_phone
                        contact_email
                        link_website
                        link_twitter
                        link_facebook
                        link_linkedin
                        introduction
                        logo {
                            url
                        }
                    }
                    products {
                        title
                        link
                        introduction
                        type
                        is_new_product
                        photo {
                            url
                        }
                        core_tag {
                            slug
                            name
                            type
                        }
                        addition_tag {
                            slug
                            name
                            type
                        }
    
                    }
                    solutions {
                        title
                        introduction
                    }
                    whitepapers {
                        title
                        link_download
                        introduction
                        photo {
                            url
                        }
                    }
                    eventPhotos {
                        photo {
                            url
                        }
                    }
                    banners {
                        link
                        photo {
                            url
                        }
                    }
                    videos {
                        title
                        link_video
                        introduction
                    }
                    talents {
                        job_list {
                            title
                            link
                        }
                        link_104_company
                    }
                  }
                }
              }`,
            }
          })
          .then(response => (this.sponsorIDList = response.data.data.getSponsor.sponsors))
          .catch(function (error) {
            console.log(error);
          });
      }

    },
    getArticle() {
      axios({
          url: api_url,
          method: 'post',
          data: {
            query: `query gets {
                        getProject: modernweb2021(lang: tw) {
                          articles{
                            id
                            title
                            subtitle
                            type
                            photo{
                              url
                            }
                            content
                            sponsors{
                              id
                              vendor {
                                show_name
                              }
                            }
                          }
                        }
                      }`,
          }
        })
        .then(response => (this.newsList = response.data.data.getProject.articles))
        .catch(function (error) {
          console.log(error);
        });
    },
    getArticlePage() {
      let link = window.location.pathname.split('/')
      let newsInnerPage = link[link.length - 1]
      if (newsInnerPage === 'news-inner.html') {
        let hash = window.location.hash
        let getArticleID = hash.substr(1, hash.length)
        axios({
            url: api_url,
            method: 'post',
            data: {
              query: `query gets {
                getArticle: modernweb2021(lang: tw) {
                  article(id: ${getArticleID}) {
                    id
                    title
                    subtitle
                    type
                    photo{
                      url
                    }
                    content
                  }
                }
              }`,
            }
          })
          .then(response => (this.articleIDList = response.data.data.getArticle.article))
          .catch(function (error) {
            console.log('getArticlePage' + error);
          });
      }

    },
  },

  computed: {
    articleList: function () {
      let newsArticle = this.newsList
      if (!!newsArticle) {
        for (let i = 0; i < newsArticle.length; i++) {
          let sliceContent = newsArticle[i].content.slice(0, 180)
          newsArticle[i].content = sliceContent
        }
      }
      newsArticle.sort(function (a, b) {
        return b.id - a.id;
      });
     
      let indexArticleList = newsArticle.slice(0, 5)
      
      return {
        indexPage: indexArticleList,
        newsPage: newsArticle
      }
    },

  },

  beforeCreate: function () {



  },

  created: function () {
    this.getArticle();
    this.getPartner();
    this.getArticlePage();
    this.getSponInnerPage()

  },

  // mounted() {
  //   this.$nextTick(() => {
     
  //     $(document).ready(function () {

  //     })
  //   });
  // }
});



$(function () {

  $(window).scroll(function () {

    var win_h = $(document).scrollTop();

    if (win_h >= $('.kv,.kv-paging').height()) {

      $('.menu').addClass('menu--fixed affix');

    } else {

      $('.menu').removeClass('menu--fixed affix');

    }

  }).scroll();



  $('#submit').click(function () {

    var data = $('form').serializeArray();

    console.log(data)

  })

});