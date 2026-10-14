const talks = [
    // {
    //     "title": "Sustaining of General Authorities, Area Seventies, and General Officers",
    //     "author": "D. Todd Christofferson",
    //     "authorRole": "Second Counselor in the First Presidency",
    //     "bodySections": [
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Brothers and sisters, it will now be my privilege to present the General Authorities, Area Seventies, and General Officers of the Church for your sustaining vote."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "We ask that you please express your support in the usual way, wherever you may be. If there are those who oppose any of the proposals, please contact your stake president."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "It is proposed that we sustain Dallin Harris Oaks as prophet, seer, and revelator and President of The Church of Jesus Christ of Latter-day Saints; Henry Bennion Eyring as First Counselor in the First Presidency; and David Todd Christofferson as Second Counselor in the First Presidency."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Those in favor may manifest it."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Those opposed, if any, may manifest it."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "It is proposed that we sustain Henry B. Eyring as President of the Quorum of the Twelve Apostles and Dieter F. Uchtdorf as Acting President of the Quorum of the Twelve Apostles."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Those in favor, please signify."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Any opposed may manifest it."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "It is proposed that we sustain the following as members of the Quorum of the Twelve Apostles: Dieter F. Uchtdorf, David A. Bednar, Quentin L. Cook, Neil L. Andersen, Ronald A. Rasband, Gary E. Stevenson, Dale G. Renlund, Gerrit W. Gong, Ulisses Soares, Patrick Kearon, Gérald Caussé, and Clark G. Gilbert."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Those in favor, please manifest it."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Any opposed may so indicate."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "It is proposed that we sustain the counselors in the First Presidency and the Quorum of the Twelve Apostles as prophets, seers, and revelators."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "All in favor, please manifest it."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Contrary, if any, by the same sign."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "As a matter of information, Elder Robert H. Simpson was released as an Area Seventy and David Kannar was sustained as an Area Seventy during the general conference leadership meetings. These changes were announced on the Church website."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "We invite you to sustain these actions."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Those in favor, please manifest it."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Any opposed, by the same sign."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "It is proposed that we sustain the other General Authorities, Area Seventies, and General Officers as presently constituted."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "All in favor may do so in the usual way."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Those opposed, if any."
    //                 }
    //             ]
    //         },
    //         {
    //             "type": "paragraph",
    //             "nodes": [
    //                 {
    //                     "type": "text",
    //                     "text": "Thank you, brothers and sisters."
    //                 }
    //             ]
    //         }
    //     ],
    //     "notes": []
    // },
    {
        "title": "Come to the Lord in His Holy House",
        "author": "Gerrit W. Gong",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Come worship and rejoice with the Lord in the house of the Lord, in temple doctrine and in your own personal temple culture.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Welcome to conference!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Why did the temple workers cross the road? To help the people on the other side."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In a world of commotion, contention, and cares, the Lord invites us to a place of spiritual safety, harmony, and holiness—the house of the Lord."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "There He teaches us His plan of happiness. He endows and blesses us. He prepares us to come home."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In our day, the Lord is bringing His holy house and covenant blessings closer to our homes and hearts. Foundational doctrine can deepen our love for the Lord. It can increase our understanding of the temple and personal temple culture."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "First doctrinal foundation:"
                    },
                    {
                        "type": "text",
                        "text": " Heavenly Father’s work and glory"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " is for us to return to Him, united as families, happy and forever."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Temple marriages are meant to last forever. Covenant belonging unites a husband, wife, and children, not until death do we part, not until convenience or attraction fade, but by covenant commitment, sacrifice, and consecration. Consistent spiritual nourishment through prayer, scripture, church attendance, service, etc. blesses and sanctifies our marriages and relationships."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "Second doctrinal foundation:"
                    },
                    {
                        "type": "text",
                        "text": " moral agency. The morning stars sang for joy."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " We chose God our Father’s loving plan to learn by our own experience. Jesus Christ redeems us from sin, physical death, and spiritual separation."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God’s redeeming work is majestic in its sweep and reach. As the Prophet Joseph Smith saw in vision,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " every person, except a very few, is saved in a kingdom of glory."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " We can inherit a glorified, paradisiacal earth"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " and live in the highest degree of celestial glory with God our Father and Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Agency means we choose, directly and indirectly, our relationships. God will not require a woman or man to be sealed or live in an eternal relationship he or she does not choose."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Agency, faith and repentance, and Jesus Christ’s Atonement make change and forgiveness possible. As we become new creatures in Jesus Christ, we sweeten our relationships. Temple service evokes our Savior’s Atonement. It softens hearts on both sides of the veil."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We find hope and healing when we perform temple ordinances for family members with whom we may earlier have had difficult relationships. Jesus Christ can help us mend, forgive, move forward. We exclaim: “When I did the temple work for my family member, my heart softened.” “I could forgive.” “I was freed.” “Anger and bitterness left.” “I felt peace for the first time.” We may even come to desire sealing with those family members."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Rich blessings await. Please “do not procrastinate the day of your repentance until the end.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " Please do not deliberately delay the spiritual peace and joyful freedom Jesus Christ wants you to have now."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "Third doctrinal foundation:"
                    },
                    {
                        "type": "text",
                        "text": " When the Holy Spirit of Promise"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " witnesses and confirms the efficacy of ordinances and covenants, they become binding in time and eternity. In His sacred role as Holy Spirit of Promise, the Holy Ghost “witnesses to the Father that the saving ordinances have been performed properly and that the covenants associated with them have been kept.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As we honor our covenants, the Holy Spirit of Promise seals our relationships with “efficacy, virtue, [and] force.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " They are written in the Lamb’s book of life."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In contrast, we would not expect ordinances and covenants we do not honor in faith or action, do not choose or desire, or perhaps even disregard or mock to be binding upon us on earth or in heaven."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "With this doctrinal foundation, let us consider five elements of personal temple culture."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, a temple dedication is a beginning. We are naturally excited when a temple is announced, groundbreaking and construction occur, and dedication takes place. Each is a milestone."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But please, while we are grateful our temples and everything in them are physically beautiful, let us celebrate and treasure even more the spiritual blessings temples bring."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks exercises all priesthood keys on earth, including keys pertaining to temples. Next Sunday, I am assigned to dedicate the Miraflores Guatemala City Temple. This year, across the world, we anticipate the First Presidency and Quorum of the Twelve Apostles will dedicate 21 temples and rededicate 1 temple."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Second, over the years, when temples were distant, faithful members sacrificed to be sealed in the temple. Some members could come to the temple only once or twice in their lives. In some cases, once in a year."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Today, as temples come closer in many places, we can manifest the precious spirit of temple sacrifice in new ways. We can come to the temple more often. We can search and bring more family names to bless deceased loved ones. As the seasons of our lives allow, we can regularly serve in the Lord’s house, both as temple patron and as temple ordinance worker."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Third, while each temple uniquely fits its place, culture, and circumstance, everything in each temple testifies of Jesus Christ. Temple leaders unitedly love the Lord and focus on temple patrons and workers. In each temple, by authority and in the name of the Lord, ordinances and covenants are truly and faithfully performed and properly recorded."
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " When patrons do their best, our service is acceptable to the Lord."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Fourth, temple sacrifice and temple service include a spirit of gratitude. I mention this with great respect and love. On occasion, a few members may think attending the temple is a right or entitlement rather than a sacred privilege and may be impatient or not understand when assistance comes slowly or is less than they want."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "On occasion, some members may feel a temple is smaller or less ornate than they expected. I once heard, “Elder Gong, we are happy to have a temple but sorry it is a small temple.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I said, “Dear brother, dear sister, ordinances are not big or small. Covenants are not big or small. Please let us never speak of a temple as big or small, elaborate or plain. Let us always only speak with love and gratitude for ‘Holiness to the Lord, the House of the Lord.’”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Please, dear brothers and sisters, wherever we live, let us always be grateful for the gifts of eternity sacred temples bring. Look for the miracles. New converts sometimes testify family on the other side of the veil led the missionaries to find and baptize family on this side of the veil so their family could be united."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Some new converts feel alone. But you are part of Heavenly Father’s family. And when you take family names to the temple, your eternal family extends on both sides of the veil. My father and mother joined our Church as the only members in either of their families. Today, family history and genealogy help connect many Gong and Char family generations. Whatever generation you are in the Church, in the chain of your eternal family, please be a strong link."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Fifth, where possible, please consider saving for and buying your own ceremonial temple clothes—cap or veil, robe, sash, and apron. As we reverently care for and use our own temple clothes, our children and grandchildren can see we love the Lord and our temple covenants."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I know a family of modest means. At their widowed mother’s request, the children saved and purchased their mother her own ceremonial temple clothes. Their mother loved using her own temple clothing as she regularly attended the temple for many years. When their mother passed away, the family honored their mother’s request by burying her in her temple clothes. Their dear mother was ready to enter eternity prepared for the glorious Resurrection."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Dear brothers and sisters, come worship and rejoice with the Lord in the house of the Lord, in temple doctrine and in your own personal temple culture."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "So, why did the temple workers cross the road? So God and temple ordinances can protect, bless, and inspire; bring forgiveness, healing, and peace; and unite loved ones here and away. May these blessings of eternity be ours in even greater abundance, I pray, in the sacred name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "See Moses 1:39."
            },
            {
                "noteNumber": 2,
                "text": "See Job 38:7."
            },
            {
                "noteNumber": 3,
                "text": "See Doctrine and Covenants 76:39–43."
            },
            {
                "noteNumber": 4,
                "text": "See Dallin H. Oaks, “Kingdoms of Glory,” Liahona, Nov. 2023, 26."
            },
            {
                "noteNumber": 5,
                "text": "See Articles of Faith 1:10."
            },
            {
                "noteNumber": 6,
                "text": "Alma 34:33."
            },
            {
                "noteNumber": 7,
                "text": "See Acts 2:33; Doctrine and Covenants 76:53; 132:7, 18–19, 26."
            },
            {
                "noteNumber": 8,
                "text": "Guide to the Scriptures, “Holy Spirit of Promise,” Gospel Library."
            },
            {
                "noteNumber": 9,
                "text": "Doctrine and Covenants 132:7."
            },
            {
                "noteNumber": 10,
                "text": "See Doctrine and Covenants 132:19."
            },
            {
                "noteNumber": 11,
                "text": "See Doctrine and Covenants 128:9."
            }
        ]
    },
    {
        "title": "The Sculpting of Our Souls",
        "author": "Tamara W. Runia",
        "authorRole": "First Counselor in the Young Women General Presidency",
        "kicker": "God is shaping us into something only He knows we can become.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I love fixing things. If there’s a knot in a shoelace or a necklace, it’s my job to untangle it. I’m also good at stain removal. I see it as a challenge; in fact, some have referred to me as “the stain whisperer.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It’s human nature to want to fix things—and to become frustrated when something comes along that we cannot fix."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Thirteen years ago our oldest son, Ryan, woke up on a Monday morning, kissed his wife and four young children goodbye, and left for work. A few hours later, he collapsed and died from undetected hypertrophic cardiomyopathy. His heart simply stopped."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The next day was his two-year-old daughter Piper’s birthday. As we lit candles on her cake and began to sing, she was looking for her dad, and I realized this was something I would not be able to fix."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Let’s focus on a scripture that has changed the lens through which I view my life. The setting is a jail cell, where Joseph Smith is pleading with God for a reprieve—for a break from his circumstance. Instead, he was told, “All these things shall give thee experience, and shall be for thy good.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I’ve often wondered if the Prophet had any idea when he received this revelation what these words would mean to so many of us now who are also turning to God, pleading for a break."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God’s answer implies that experience is valuable, and I’m learning the only way to get it is to go through it. Can’t we skip over it? Is there some other way? No, there isn’t another way."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It’s like we heard these lessons in a premortal classroom. We studied it there, and we’re living it here, in this laboratory of life. This is where we “put on Christ.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "C. S. Lewis explained, “God intends to give us what we need, not what we now think we want.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " But sometimes we’re puzzled when we get what we need, aren’t we? How can our loving Father in Heaven watch as we go through heartbreaking experiences? I’ve wrestled with this, and maybe you have too."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And while I know earth life is about experience, why am I so surprised every time I experience it? Maybe it’s because I grew up hearing things like “If you keep the commandments, you’ll be blessed. Pay your tithing, and the windows of heaven will open. Follow the Word of Wisdom, and you’ll have health and protection.” True promises, right?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "So the gospel felt like a big umbrella I could hold over my head to keep the rain from falling on me. But I’ve learned from experience that we’re all going to get rained on. And sometimes we’re going to get pelted!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The gospel isn’t the umbrella; it’s the solid rock we’re standing on during the storm—that “sure foundation … whereon if men build they cannot fall.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When an angel asked Nephi, “Knowest thou the condescension of God?” he humbly answered, “I know that he loveth his children; nevertheless, I do not know the meaning of all things.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God’s love has moved me from questions that begin with “why” to reflections that begin, “I know that God loves me, so what is supposed to be happening here?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It is precisely because He loves us that we’re having these tempering, refining experiences. God knows, and we are here to learn, that we must become like Him so we can live with Him!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And a godlike life is carved from the very things that make it hard—the gut-wrenching things that happen and the righteous desires that haven’t."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I testify that during those sanctifying experiences, when growth is taking place and God is at work, our stories may not look like success to others. In fact, on the outside it may look like things are sort of unraveling or falling apart, and it will certainly feel that way."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God is shaping us into something only He knows we can become."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Still, like Nephi, I do not know the meaning of all things."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When I spoke at Ryan’s funeral, I looked at his wife, Cari, and their four children with such a heavy heart and said, “I don’t understand why this happened. I don’t. But let me be clear: Not understanding is not the same as not believing.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I may not understand everything, but I absolutely believe God sees you, loves you, and knows your story—a story that is both personal and purposeful!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Your story is personal. So you don’t need to look sideways and ask, “How come my life doesn’t look like theirs?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And it’s purposeful in that it has meaning. Our suffering means something. It’s not a detour from the path; it gives purpose to our path."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God is intimately aware of your experience and has a plan for all of it—for each one of us, even if we can’t see it right now."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Jaac with Lego bricks.",
                "src": "https://www.churchofjesuschrist.org/imgs/carc2wcvug8olxe0hedxjvdqp53sa5wxjhanl90m/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "At Ryan’s funeral, his oldest son, seven-year-old Jaac, shared a Primary talk he and his dad had worked on just two weeks earlier. Jaac said, “I love Lego bricks, and when I get a new box, I open it up and lay out all the pieces and follow the instructions. Just like our Heavenly Father has a plan, and if we follow, it will guide us, and we can build hard things.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Then Cari asked Jaac, “What would you do if you didn’t have the picture on the box, only the instructions? Would you still stick to the plan?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He answered, “Yes, because you can trust the one who designed it, and it always turns out.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But what if you had a beautiful story you thought your life was going to tell, and instead you’ve had to surrender that story? That sting is real, and that wound is wide."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It will take your finest faith in Christ to keep putting together the pieces—the ones that make sense but also the ones that don’t."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Consider this: Christ’s work in your life and His love for you are bigger than your present story."
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " And He can fix what feels badly broken."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The day before Ryan died, he was set apart as the elders quorum president. That afternoon he visited a neighbor whose wife and children had just left him. When Ryan returned, he asked Cari to write down what he had told this man. Ryan said, “Brother, you have a choice right now, and it’s a big one. You can curse God and blame Him, or you can turn to Him and let Him heal you.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We all have a choice right now. Let’s choose Christ, who can heal the wounds of this world while carving out room for joy!"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God is saying, “Trust me,” and we are learning how to say yes."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "With an earned conviction, I witness that this—all of this—is the true and only way we can grow and progress and become like our heavenly parents and Savior."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I don’t pretend to know how it works, but it feels like a sort of divine mending that changes what’s happening "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "to"
                    },
                    {
                        "type": "text",
                        "text": " you into something happening "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "for"
                    },
                    {
                        "type": "text",
                        "text": " you!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Let me leave this last visual image from a sculpting class my brother Kent took in college. He said:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Our final assignment was to sculpt a bust of ourselves out of clay. I thought to myself, ‘This is going to be easy enough.’"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“We began, and I realized it wasn’t easy at all! When I looked at the piece, the eyes were terrible. No matter how hard I tried, I couldn’t get the eyes to look lifelike."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“I observed my classmates and noticed our instructor was helping them. He was very good."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“I, however, didn’t want help. I wanted this to be "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "my"
                    },
                    {
                        "type": "text",
                        "text": " piece. I struggled alone for quite a while, until I finally humbled myself and asked for help."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“The instructor came over and deftly started carving; he did it so aggressively and abruptly that it startled me. He dug into the clay much further than I had, and within a few minutes the eyes came to life. It looked so good! There was no way I could have done it."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“As I stepped back and looked at the piece, I could see that it was uniquely me. And yet, without a doubt, a master’s hand had shaped what mine could not.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My friends, there is sculpting taking place within each of our souls. To invite the Savior to become involved is hard. Our pride gets in the way."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He’ll lovingly chasten us to get our attention, but He waits for an invitation before He can really go to work."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Then He will start carving, sometimes surprising us with how abrupt and aggressive the work feels."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But as time goes on, we will begin to see the work of His hand. God is shaping us into something only He knows we can become."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And one day, when all the suffering and loneliness have ended and our pain is gone, we will be able to step back and look into the mirror of our own soul. Then we will “stand all amazed”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " and feel to fall at the Savior’s feet and thank Him. We will thank Him for all of it—the molding, the shaping, the pain, and the adversity that have helped us become more like Him."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“For we shall see him as he is,” and “we shall be like him,”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " I joyfully testify in the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Doctrine and Covenants 122:7."
            },
            {
                "noteNumber": 2,
                "text": "Galatians 3:27."
            },
            {
                "noteNumber": 3,
                "text": "C. S. Lewis, The Problem of Pain (1962), 53."
            },
            {
                "noteNumber": 4,
                "text": "Helaman 5:12."
            },
            {
                "noteNumber": 5,
                "text": "1 Nephi 11:16, 17."
            },
            {
                "noteNumber": 6,
                "text": "“Truly [God] loves us, and because He loves us, He neither compels nor abandons us. Rather He helps and guides us” (D. Todd Christofferson, “Free Forever, to Act for Themselves,” Liahona, Nov. 2014, 17). “In mortality, we can ‘come boldly’ to the Savior and receive compassion, healing, and help. Even while we suffer inexplicably, God can bless us in simple, ordinary, and significant ways. As we learn to recognize these blessings, our trust in God will increase” (Dale G. Renlund, “Infuriating Unfairness,” Liahona, May 2021, 43). See also Adam S. Miller, Letters to a Young Mormon (2014), 17–23."
            },
            {
                "noteNumber": 7,
                "text": "See Neal A. Maxwell, “Plow in Hope,” Liahona, July 2001, 72–74."
            },
            {
                "noteNumber": 8,
                "text": "Kent Vincent Wood, personal correspondence."
            },
            {
                "noteNumber": 9,
                "text": "“I Stand All Amazed,” Hymns, no. 193."
            },
            {
                "noteNumber": 10,
                "text": "1 John 3:2."
            }
        ]
    },
    {
        "title": "The Gift of Testimony",
        "author": "Gérald Caussé",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Your testimony can literally change lives—your own and the lives of others.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Eighteen years ago, Valérie and I received a telephone call from President Thomas S. Monson, during which he called me to serve as a General Authority Seventy. We accepted in faith, knowing that this calling would profoundly change the course of our lives."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The next morning, as I prayed for comfort and guidance, I felt prompted to open a copy of the "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Liahona"
                    },
                    {
                        "type": "text",
                        "text": " magazine lying on our kitchen table. Almost immediately, my eyes found this reassuring promise from the Lord: “Be of good cheer, and do not fear, for I the Lord am with you, and will stand by you; and ye shall bear record of me, even Jesus Christ.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "That scripture brought peace to my heart. I realized that my primary responsibility was simply to bear witness of the Savior. Everything else would be in His hands."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Eleven months ago, I was reminded of that same promise under remarkable circumstances. I had just been called to serve as one of the Lord’s Apostles and was invited to join the First Presidency and the Twelve in their sacred meeting room. You can imagine how I felt—astonished, humbled, and deeply moved."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks invited me to bear my testimony of Jesus Christ. As I prepared to speak, a feeling of peace again filled my heart and those familiar words returned with power: “Be of good cheer, and do not fear, … and ye shall bear record of me, even Jesus Christ.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In that sacred moment, I knew that nothing could be more meaningful, as my first act as a newly ordained Apostle, than to bear witness of the Redeemer of the world."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Special Witnesses"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As recorded in the New Testament, before ascending to His Father, the resurrected Savior gave His Apostles this unequivocal charge: “Ye shall be witnesses unto me.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Today, in the restored Church of Jesus Christ, the apostolic witness remains central to our doctrine and compelling evidence of its truth. As the Prophet Joseph Smith taught, “The fundamental principles of our religion are the testimony of the Apostles and Prophets, concerning Jesus Christ.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Each Apostle is called of God and endowed with priesthood keys to be a “special [witness] of the name of Christ in all the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " Apostles bear a unique, authoritative, divinely empowered witness of the living Christ—of His divine reality, His gospel, His Atonement, and His Resurrection."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Every Member a Witness of Christ"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Yet the sacred responsibility to bear witness of Jesus Christ is not limited to prophets and apostles. It extends to all His disciples."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The truth of the restored gospel of Jesus Christ is manifest in the lives"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " of millions of His followers throughout the world. Through your testimonies, in word and deed, you demonstrate the reality of a loving Savior and of the blessings that come through His gospel."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Bearing witness is a foundational responsibility of discipleship. As members of the Church who have covenanted to take upon ourselves the name of Christ, sharing our witness of God and His Son is an essential way to keep that sacred covenant. As taught in the Book of Mormon, covenant disciples will “stand as witnesses of God at all times and in all things, and in all places.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A Precious Gift from God"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The gift of testimony is deeply personal. It is received in the intimacy of our relationship with God and shaped according to our unique experiences, circumstances, and needs. It grows through faith, earnest seeking,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " gospel living, and the quiet influence of the Holy Ghost. Truly, “to know that Jesus Christ is the Son of God”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " is one of life’s greatest blessings and a precious gift from God."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Your testimony may be different from mine or that of other family members or fellow Saints. Please trust it, nurture it, and bear it, because it is uniquely yours."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A Gift to Be Shared"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Like many of you, I have often wondered, “Why me? Why was I so privileged to receive a testimony of the restored gospel?” I never found a fully satisfying answer. Over time, however, I came to ask a better question: “What does the Lord expect me to do with this gift?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our testimony is not a talent to be hidden."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " It is a gift to be shared—with grateful hearts and in a spirit of humility and love."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Expressing Love Through Testifying"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "Testimony"
                    },
                    {
                        "type": "text",
                        "text": " and "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "love"
                    },
                    {
                        "type": "text",
                        "text": " are deeply connected gifts that echo and strengthen one another."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "To say “I know” is a tender expression of "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "love"
                    },
                    {
                        "type": "text",
                        "text": " toward our neighbor. Because we love others, we naturally desire to share with them the most precious gift we have received—our witness of Jesus Christ and His gospel."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In turn, saying “I love you” with a pure and sincere heart is a way of bearing "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "testimony"
                    },
                    {
                        "type": "text",
                        "text": " of Jesus Christ. Whenever we express Christlike love to those around us, we bear witness of Him, the source of all perfect love."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, I hope you will fill your lives, and the lives of others, with many heartfelt "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "I knows"
                    },
                    {
                        "type": "text",
                        "text": "—as I hope you already do with many "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "I love yous."
                    },
                    {
                        "type": "text",
                        "text": " As these expressions of faith and love come together, they will help create an environment where the Spirit of the Lord can dwell and bring joy to your hearts."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We Can All Testify"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "One of our nieces recently shared an experience from her youth. She said: “A few years ago, when I was beginning to gain a testimony, I bore my testimony at a Young Women camp. I was so nervous that I only managed to say two simple sentences: ‘I know that God loves me’ and ‘I know that God has a plan for me.’ In the days that followed, I felt discouraged because I wished I could speak like the other girls. I talked with my mom, and she asked, ‘Do you believe what you said?’ ‘Yes,’ I replied. ‘Then that’s all that matters,’ she said.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Her mother was right. There is great power in a sincere, humble, and heartfelt testimony. It need not be long, eloquent, or dramatic—it only needs to be true."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Each of us can bear such a witness, for it is the Spirit—not words—that testifies of the truth. As the Lord promised, when one speaks by the power of the Holy Ghost, “the Holy Ghost shall be shed forth in bearing record unto all things whatsoever ye shall say.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Throughout history, countless seekers of truth have been transformed by the testimonies of humble servants of the Lord—those whom He calls “the weak and the simple.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "From Enoch and Moses to Joseph Smith, and to the more than 90,000 missionaries serving throughout the world today, the pattern is the same. They stand and declare what they know to be true. Their words may be simple and their speech imperfect, but their witness carries divine power because it is confirmed by the Holy Ghost."
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Changing Lives Through Testifying"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, do you realize that your testimony can literally change lives—your own and the lives of others?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As you share it freely, your own testimony will grow stronger. You will draw closer to the Lord and feel more deeply the power of His redemption."
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " In turn, you will become instruments in His hands to bless and minister to those around you."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "At a moment of deep anguish, the young Alma remembered having “heard [his] father prophesy … concerning the coming of one Jesus Christ … to atone for the sins of the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " That remembered witness from his father became the spark of hope that led him to repent and completely change his life."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "How many “Almas” are there around you waiting to hear your witness and discover, or rediscover, the hope that is found in Jesus Christ?"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Seeking Opportunities to Testify"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "If you have received the gift of a testimony—even if it is only the beginning of one—it is your duty and privilege to share it."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I invite you to look each day for opportunities, as prompted by the Holy Ghost, to bear witness of Jesus Christ and His restored gospel—even if only for a minute or two. A brief and sincere expression of faith can make a profound difference—whether at home with your family, in testimony meetings, in ministering visits and missionary lessons, on social media, or in simple, everyday interactions with others. You can share your beliefs in simple and natural ways, such as “I love our Savior, Jesus Christ” or “The gospel brings joy to my heart.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Imagine what could happen if all of us—millions of disciples of Jesus Christ—consistently shared our testimonies. Countless lives would be blessed, faith would grow, and the love of Christ would spread more abundantly throughout the world."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My Testimony"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As a servant of the Lord and one of His special witnesses, I am profoundly grateful for the gift of testimony I have received through the power of God. I solemnly declare that we have a loving Heavenly Father and that His Son, Jesus Christ, is the Savior of the world and the source of “every good gift.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    },
                    {
                        "type": "text",
                        "text": " I express my earnest desire to serve Them and to bear witness of Them continually, all the days of my life. In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Doctrine and Covenants 68:6."
            },
            {
                "noteNumber": 2,
                "text": "Acts 1:8."
            },
            {
                "noteNumber": 3,
                "text": "Teachings of Presidents of the Church: Joseph Smith (2007), 49."
            },
            {
                "noteNumber": 4,
                "text": "Doctrine and Covenants 107:23."
            },
            {
                "noteNumber": 5,
                "text": "See Matthew 18:16; 2 Corinthians 13:1; Doctrine and Covenants 6:28."
            },
            {
                "noteNumber": 6,
                "text": "Mosiah 18:9."
            },
            {
                "noteNumber": 7,
                "text": "See Doctrine and Covenants 46:8."
            },
            {
                "noteNumber": 8,
                "text": "Doctrine and Covenants 46:13."
            },
            {
                "noteNumber": 9,
                "text": "See Matthew 25:14‒30."
            },
            {
                "noteNumber": 10,
                "text": "See James 1:17; Moroni 7:13, 24, 47."
            },
            {
                "noteNumber": 11,
                "text": "Doctrine and Covenants 100:8."
            },
            {
                "noteNumber": 12,
                "text": "Doctrine and Covenants 1:23."
            },
            {
                "noteNumber": 13,
                "text": "See Doctrine and Covenants 100:5‒8, 10."
            },
            {
                "noteNumber": 14,
                "text": "See Doctrine and Covenants 62:3; 84:61; Spencer W. Kimball, “It Becometh Every Man,” Ensign, Oct. 1977, 5."
            },
            {
                "noteNumber": 15,
                "text": "Alma 36:17."
            },
            {
                "noteNumber": 16,
                "text": "James 1:17; Moroni 10:18."
            }
        ]
    },
    {
        "title": "Prophets, Seers, and Revelators",
        "author": "Vaiangina Sikahema",
        "authorRole": "Of the Seventy",
        "kicker": "What a blessing it is to live in a time when apostles and prophets are on the earth.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In 1947, my maternal grandparents, Sione Tufui and Salote Tongi Wolfgramm, were serving a full-time mission in Niuatoputapu, a small, isolated volcanic island in the Kingdom of Tonga in the South Pacific. My grandparents were poor farmers with no formal education. Grampa was 28, Gramma was 25, and with them were their three children: my mother, Potenitila (Ruby), age 4; Makeleta (Maggie), age 3; and 9-month-old Vilimanulea, at the time their only son."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "With limited visas for Americans, Tongan couples like the Wolfgramms were routinely called to serve on neighboring islands or in villages as “senior” couple missionaries."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Elder Sikahema’s grandfather.",
                "src": "https://www.churchofjesuschrist.org/imgs/canas6qi0xc6b47rdg54bq4pwzdwbqx36kdwa1v0/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Elder Sikahema’s grandmother.",
                "src": "https://www.churchofjesuschrist.org/imgs/x0yu736syw0tl0ynf9j6ptsymdg0b41k6xir4g9a/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In June of that same year, Apostle Matthew Cowley, who was over the Pacific, was coming to Tonga. Only twice before had an Apostle visited our island kingdom: David O. McKay in 1921, followed by George Albert Smith in 1938."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For Saints scattered across the Pacific, having an Apostle of the Lord among them was the chance of a lifetime. Reaching the Apostle meant a long voyage for my grandparents across the largest body of water on the planet to the main island of Tongatapu, but first stopping midway on their home island of Vava‘u. The Pacific is known for its fickle weather patterns, and the week of their trip was no different."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Map of the Wolfgramms’ journey.",
                "src": "https://www.churchofjesuschrist.org/imgs/3heb9m545m5v35xiax9b10hxddyxhidwqv7o91w4/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Wolfgramms sailed into a storm; a journey that should have taken 16 hours to Vava‘u stretched into two and a half brutal days at sea. From my Gramma’s journal, she wrote: “We were completely soaked, … battered, and sick, … too weak to eat. … I held Vilimanulea to my chest until finally arriving to Vava‘u.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Yet their trial was not over. The storm left the baby severely dehydrated. With no medicine, the Wolfgramms’ precious son died of exposure. Within two days, they buried their baby in Vava‘u and continued their voyage."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For the Wolfgramms, burying their infant child was akin to the pioneers who buried their children on the trail to Zion. Like the early pioneers, they yearned to hear and be in the presence of an Apostle."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Grieving with empty arms, my grandparents got back on the boat, their mission not yet complete."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "They were sailing toward an Apostle, who held priesthood keys, held the authority for the ordinances that would later seal them as an eternal family. They sailed to sit at the feet of an Apostle, who would teach them their duty so they could bless others on their island with the message of the restored gospel of Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "You see, my grandparents understood that the gospel restored by Joseph Smith revealed truths previously withheld from them. Joseph helped restore the Savior’s Church with prophets, seers, and revelators who held priesthood keys that would one day bind them together as a family forever."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My grandparents girded up their loins, fresh courage took (see “Come, Come, Ye Saints,” "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Hymns"
                    },
                    {
                        "type": "text",
                        "text": ", no. 30), and sailed to be with Elder Matthew Cowley."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For centuries after the deaths of the ancient apostles and prophets until the boy Joseph knelt in the grove of trees near Palmyra, New York, there was no revelation to prophets. An Old Testament prophet called it a famine:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Behold, the days come … that I will send a famine in the land, not a famine of bread, nor a thirst for water, but of hearing the words of the Lord:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“And [people] shall wander from sea to sea, and from the north even to the east, they shall run to and fro to seek the word of the Lord, and shall not find it” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Amos 8:11–12",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/amos/8?lang=eng&id=p11-p12#p11"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "That same Old Testament prophet, Amos, also declared, “Surely the Lord God will do nothing, but he revealeth his secret unto his servants the prophets” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Amos 3:7",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/amos/3?lang=eng&id=p7#p7"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Savior foretold of false prophets who would decimate His ancient Church (see "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Matthew 7:15–23",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/7?lang=eng&id=p15-p23#p15"
                    },
                    {
                        "type": "text",
                        "text": "). The Apostle Paul also taught, “For I know this, that after my departing shall grievous wolves enter in among you, not sparing the flock” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Acts 20:29",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/acts/20?lang=eng&id=p29#p29"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Reformers in the Middle Ages sought and yearned for prophetic voices but could not find them."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Even in modern times, there are people who thirst to hear prophetic direction and guidance."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Lord gave Joseph Smith this counsel: “And all they who receive the oracles of God, let them beware how they hold them lest they are accounted as a light thing” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Doctrine and Covenants 90:5",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/90?lang=eng&id=p5#p5"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I suspect the Lord knew that even when we would have these devices (cell phones) to easily see and hear His anointed servants, many of us would still take them for granted."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In a general conference address over 20 years ago, President Jeffrey R. Holland asked: “Are the heavens open? Does God reveal His will to prophets and apostles as in days of old? That they are and that He does is the unflinching declaration of The Church of Jesus Christ of Latter-day Saints to all the world. And in that declaration lies the significance of Joseph Smith, the Prophet, for nearly 200 years now” (“"
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Prophets, Seers, and Revelators",
                        "href": "https://www.churchofjesuschrist.org/study/general-conference/2004/10/prophets-seers-and-revelators?lang=eng&id=p18#p18"
                    },
                    {
                        "type": "text",
                        "text": ",” "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Liahona"
                    },
                    {
                        "type": "text",
                        "text": ", Nov. 2004, 8)."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Joseph described the moment the heavens opened this way: “When the light rested upon me I saw two Personages, whose brightness and glory defy all description, standing above me in the air. One of them spake unto me, calling me by name and said, pointing to the other—"
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "This is My Beloved Son. Hear Him!"
                    },
                    {
                        "type": "text",
                        "text": "” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Joseph Smith—History 1:17",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/pgp/js-h/1?lang=eng&id=p17#p17"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "With that clear, simple, and understated introduction, the Father and His Son, Jesus Christ, would begin the work of restoring the Savior’s ancient Church through a then-teenage boy in upstate New York."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the years that followed this momentous event, greater truths, priesthood authority, sacred ordinances, additional scriptures, and knowledge of God’s plan of salvation would all be restored or rediscovered through the Prophet Joseph Smith."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Perhaps you can appreciate why my beloved grandparents were so eager to be in the presence of one of the Lord’s anointed. Even in their despair and while mourning the tragic loss of their only son—their handsome, cheerful little boy—they solemnly buried him and made the Herculean effort to sail just to listen to an Apostle of the Lord."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What a blessing it is to live in a time when apostles and prophets are on the earth. As we begin this opening session of the 196th Semiannual General Conference of the Church, let us not be guilty of holding “the oracles of God … as a light thing” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Doctrine and Covenants 90:5",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/90?lang=eng&id=p5#p5"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It is interesting to note that when the Church was only about one and a half years old, some early Church leaders opposed the idea of publishing the Lord’s revelations through the Prophet Joseph that would eventually become the Doctrine and Covenants. Some of them were embarrassed by the young prophet’s poor writing skills."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Maybe that’s why the Savior declared, “What I the Lord have spoken, I have spoken, and I excuse not myself; and though the heavens and the earth pass away, my word shall not pass away, but shall all be fulfilled, whether by mine own voice or by the voice of my servants, "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "it is the same"
                    },
                    {
                        "type": "text",
                        "text": "” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Doctrine and Covenants 1:38",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/1?lang=eng&id=p38#p38"
                    },
                    {
                        "type": "text",
                        "text": "; emphasis added)."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "How grateful I am for noble progenitors who left me and my posterity a legacy of faith and courage in the face of difficulties and obstacles."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I witness of the truths of the restored gospel and of living prophets, seers, and revelators in the sacred name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": []
    },
    {
        "title": "Jesus Christ Is the Great Deliverer!",
        "author": "Kevin J. Hathaway",
        "authorRole": "Of the Seventy",
        "kicker": "As we humbly and patiently keep our covenants, the Savior will visit us in our afflictions and bring assurances of deliverance.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ is the Great Deliverer!"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Have you ever felt left out, wondered if you were enough, lost someone you loved, faced illness, experienced family difficulties, or carried a burden no one else could see? My message today is that Jesus Christ delivers the righteous from these and every other affliction of mortality."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " "
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ descended below all things and suffered “pains and afflictions and temptations of every kind”; therefore, He comprehends our suffering, is filled with mercy, and knows how to succor us according to our infirmities."
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " With perfect understanding and infinite power, He can deliver the righteous from all things, forever. His deliverance is certain; the question for most righteous followers is not "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "if"
                    },
                    {
                        "type": "text",
                        "text": " He will deliver but "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "how"
                    },
                    {
                        "type": "text",
                        "text": " and "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "when"
                    },
                    {
                        "type": "text",
                        "text": " He will do so."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our family experienced a sudden trial and the Lord’s deliverance as we drove in two cars to begin our service as mission leaders. While driving in a construction zone, two large tires came loose from a semitruck and struck both cars at high speed. The airbags deployed, the cars were destroyed, and we were left stranded on the roadside wondering why this had happened when we had left everything to serve the Lord."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In that moment, the Spirit brought us peace: Everything would be all right. We were not immediately delivered from the trial, but that assurance gave us hope in the deliverance that would come. With the help of many wonderful people, we arrived on time and began our mission without serious injury."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The experience on that freeway illustrates a scriptural pattern of divine deliverance as follows: Opposition brings heartrending questions and emotions, sincere seeking invites assurances, Christ’s grace enables us to endure and grow, and deliverance comes in the Savior’s time and way."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Let us consider each part of the pattern."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Opposition, Heartrending Questions, and Emotions"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Opposition comes to all, even the righteous. It can stir heartrending questions and deep emotions, like Joseph Smith’s cry from Liberty Jail, “O God, where art thou?”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " or the grief and fear felt by Helaman’s stripling warriors."
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " Such questions and emotions are not sin or weakness; they can create a sacred space where agency is activated and we choose whether to turn toward Jesus Christ."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Sincere Spiritual Seeking"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Sincere seeking means turning toward Heavenly Father and Jesus Christ through heartfelt prayer, purposeful fasting, and scripture study. Alma’s people in bondage “began to cry mightily to God.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " King Darius fasted through the night as he waited for Daniel’s deliverance from the lions’ den."
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " Such acts of faith draw us closer to Jesus Christ."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Assurances of Deliverance"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As we humbly and patiently keep our covenants, the Savior will visit us in our afflictions and bring assurances of deliverance."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " Many in the scriptures received assurances of peace, faith, and hope for deliverance in Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Sister Kenzie Brinkerhoff was visited in her afflictions and given sacred assurances as well. On the last preparation day before Sister Brinkerhoff returned home from her mission, her father, Kelly, called early in the morning to tell her he loved her, was proud of her, and was excited to hug her soon. Heartbreakingly, while driving home from work that night, Kelly was in a vehicle accident and passed away. When my wife and I arrived soon after Kenzie received the news, she was grieving deeply. Through her tears came the heartrending question, “President, how could this happen when I was one week away from hugging my dad?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Several weeks later I called to ask how she was dealing with her father’s passing, and she said: “The past few weeks have been the most awful and the most sacred time in my life. I have never clung so tightly to my covenants. I know that Jesus knows what this feels like, and He will heal me.”"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Enabled Enduring Through the Grace of Jesus Christ"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Enabled enduring comes through the grace of Jesus Christ and strengthens us to “cheerfully do all things that lie in our power” and then “stand still, with the utmost assurance, to see the salvation of God, and for his arm to be revealed.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " This grace does not remove the pain and difficulty of affliction; it is an enabling power that allows us, after all we can do, to receive divine strength beyond our own and lay hold on eternal promises through Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As Kenzie binds herself to Heavenly Father and Jesus Christ in prayer, obedience, and covenant keeping, They help her endure what she cannot bear alone. That same enabling grace is available to all who turn to Jesus Christ."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Divine Deliverance According to His Time and His Way"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As we wait upon the Lord and exercise faith in Him, needed growth and spiritual stretching come, and the Savior delivers us from our afflictions and consecrates them for our gain."
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " He does this in His time and way."
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "To Kenzie and all who wait for divine deliverance, I testify that the Lord is not delayed, distracted, or derelict in His deliverance. He has not forgotten you. He does not take joy in your suffering. However, He knows that lessons learned while waiting can bring converting growth that an earlier rescue might not produce."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But what of moments when the hour seems too late, the loss too final, and deliverance appears impossible? Surely, Jairus must have felt the time had passed and deliverance was impossible when he received news that his daughter had died. But Jesus said, “Be not afraid, only believe.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " Holding on to that assurance, Jairus watched the Savior deliver his daughter from death, showing that no mortal timeline can place us beyond Christ’s power to deliver."
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When deliverance feels impossible, remember Elder Patrick Kearon’s witness: “Jesus specializes in the seemingly impossible. He came here to make the impossible possible, the irredeemable redeemable, to heal the unhealable, to right the unrightable, to promise the unpromisable. And He’s really good at it. In fact, He’s perfect at it.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "To all who continue to face the pain, fear, and loneliness of life, I echo the Savior’s words: “Be not afraid, only believe.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    },
                    {
                        "type": "text",
                        "text": " In His time and way, Jesus Christ will deliver you. Some miracles are immediate, some come after long waiting, and some await the Resurrection."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "May we hear, believe, and act on our “great Deliv’rer’s”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    },
                    {
                        "type": "text",
                        "text": " reassuring voice when He says, “I will seek that which was lost, and bring again that which was driven away, and will bind up that which was broken, and will strengthen that which was sick.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " I testify that Jesus Christ is the Great Deliverer, now and forever, in the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "See “Israel, Israel, God Is Calling,” Hymns, no. 7."
            },
            {
                "noteNumber": 2,
                "text": "See Mosiah 24:14–16; Alma 7:11–12; 36:3, 27. Jesus Christ also delivers all people from physical death through the Resurrection (see 1 Corinthians 15:21–22; 2 Nephi 9:6, 11–12; Alma 11:42–44). He delivers us from sin as we repent and keep covenants with Him (see 2 Nephi 9:21–23; Alma 7:13–14; Helaman 5:11)."
            },
            {
                "noteNumber": 3,
                "text": "Alma 7:11; see also verse 12."
            },
            {
                "noteNumber": 4,
                "text": "See Mosiah 24:8–16 (Alma’s people); Alma 58:1–13 (the stripling warriors); Doctrine and Covenants 121:1–8 (Joseph Smith)."
            },
            {
                "noteNumber": 5,
                "text": "Doctrine and Covenants 121:1."
            },
            {
                "noteNumber": 6,
                "text": "See Alma 58:9."
            },
            {
                "noteNumber": 7,
                "text": "Mosiah 24:10."
            },
            {
                "noteNumber": 8,
                "text": "See Daniel 6:18."
            },
            {
                "noteNumber": 9,
                "text": "See Mosiah 24:13–16."
            },
            {
                "noteNumber": 10,
                "text": "See Alma 58:11; Doctrine and Covenants 121:7."
            },
            {
                "noteNumber": 11,
                "text": "Doctrine and Covenants 123:17."
            },
            {
                "noteNumber": 12,
                "text": "See 2 Nephi 25:23; Bible Dictionary, “Grace.”"
            },
            {
                "noteNumber": 13,
                "text": "See 2 Nephi 2:2."
            },
            {
                "noteNumber": 14,
                "text": "See Mosiah 24:13–16; Alma 36:27; Doctrine and Covenants 121:7–8."
            },
            {
                "noteNumber": 15,
                "text": "Mark 5:36; see also Luke 8:50."
            },
            {
                "noteNumber": 16,
                "text": "See Mark 5:35–42; Luke 8:49–55. The story of Lazarus further demonstrates that Jesus Christ is not bound by mortal timelines (see John 11:1–44)."
            },
            {
                "noteNumber": 17,
                "text": "Patrick Kearon, “He Is Risen with Healing in His Wings: We Can Be More Than Conquerors,” Liahona, May 2022, 39."
            },
            {
                "noteNumber": 18,
                "text": "Mark 5:36; see also Luke 8:50."
            },
            {
                "noteNumber": 19,
                "text": "“Israel, Israel, God Is Calling,” Hymns, no. 7."
            },
            {
                "noteNumber": 20,
                "text": "Ezekiel 34:16."
            }
        ]
    },
    {
        "title": "A Higher and Holier Fast",
        "author": "Ulisses Soares",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Fasting, when observed with joy and joined with prayer and generosity, brings sweeter communion with the Lord and a deeper, more personal connection with Him.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My beloved brothers and sisters, I have prayerfully pondered the sacred blessings our Heavenly Father and His Beloved Son, Jesus Christ, offer us as we draw near to Them through sincere and faithful observance of the law of the fast. Therefore, this morning, from the bottom of my heart, I testify of the sanctifying spiritual power that flows into our lives as we seek to live this law in a higher and holier way. This divine pattern of devotion brings strength, guidance, peace, and divine help to sustain us throughout our mortal journey."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Lord’s call to fast in these latter days is an echo of the message He gave through the Old Testament prophet Isaiah—a message of healing, covenant power, and divine blessing that continues to be offered to all of God’s children. In "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Isaiah chapter 58",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/isa/58?lang=eng"
                    },
                    {
                        "type": "text",
                        "text": ", the Lord lifted the vision of His covenant people beyond the outward observance of this law. He also revealed its divine purpose as an act of worship that shapes and refines our discipleship and draws us closer to Him."
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Isaiah beautifully recorded the blessings promised to those who faithfully live this law:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Then shall thy light break forth as the morning, and thine health shall spring forth speedily. …"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Then shalt thou call, and the Lord shall answer; thou shalt cry, and he shall say, Here I am.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What a tender promise: light after darkness, healing after weariness, and the comforting assurance that when we call upon the Lord, He is near. President Joseph F. Smith taught that proper fasting “would … place the body in subjection to the spirit, and so promote communion with the Holy Ghost” and that “this law would bring [us] nearer to God.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A sincere and faithful fast is accompanied by earnest and intentional prayer. As we lift our hearts to the Lord in humility, fasting becomes an expression of our desire to draw near to Him, communicate the true desires of our hearts, and understand His will for us. Through the union of fasting and prayer, our faith, love, and devotion to Him deepen. We become more humble and more aware of our complete dependence upon the Lord. Our hearts are softened, our souls become more receptive to the influence of the Holy Ghost, and we are better prepared to receive personal revelation and move forward along the covenant path."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "This divine pattern finds its highest and holiest expression in the life of Jesus Christ. As in all things, the Savior did not merely teach divine principles—He exemplified them perfectly. Before His earthly ministry began, He withdrew into the wilderness and spent 40 days communing with His Father. He was the Only Begotten Son of God in the flesh, and of all the things He could have done to prepare for His sacred mission, He chose to seek complete alignment with His Father’s will through earnest fasting and prayer. Spiritually fortified, the Savior triumphed over the temptations of the adversary, began His mortal ministry, and fulfilled His divine destiny as Redeemer of the world. His example teaches us that fasting and prayer may not remove every burden from our path, but they draw heaven near and endow us with divine power to overcome or endure whatever circumstances we may face, giving us the spiritual fortitude to remain faithful to the Father’s will."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Adopting this holy pattern of fasting is more than a physical test of restraint or a petition for specific blessings. It is an elevating expression of faith and trust in the Lord through which our hearts can be filled with rejoicing as we commune with Him more deeply. It is a way to align our desires with His purposes, and our expectations with His wisdom."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " Even when answers do not come in the way we expect, fasting and prayer help us develop greater confidence in the Lord, in our covenants with Him, and in His plan for our lives, as well as a deeper willingness to accept His will."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Through this holy law, the Lord also invites us to look beyond ourselves and turn our hearts toward His children. Isaiah taught that an acceptable fast helps us “to let the oppressed go free” and to “break every yoke.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " The Prophet Joseph Smith once taught, “A man filled with the love of God, is not content with blessing his family alone, but ranges through the whole world, anxious to bless the whole human race.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Thus, our fast becomes not only a personal act of devotion to God but also an outward expression of Christlike charity and love."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In our day, our desire to help “the oppressed go free” and “break every yoke,” as the Lord taught through the prophet Isaiah, finds tangible expression in generous fast offerings. Each contribution reflects a willing heart, faith in the Lord Jesus Christ, and a sincere desire to bless those in need. This spirit of generosity also reflects the Savior’s own example. He came down from heaven, dwelt among the children of men, and suffered “pains and afflictions and temptations of every kind … that he [might] know according to the flesh how to succor his people according to their infirmities.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " As we follow His perfect example by seeking to succor God’s children, our hearts are opened to the needs of others, and we become better prepared to minister in a more Christlike way."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Though our fast offerings may seem small and simple, they become consecrated expressions of compassion, concern, and service. As we give generously—not only for the benefit of those in need but also as an expression of our love for the Lord and our commitment to His work—we consecrate both our means and our time to Him. In doing so, we give more fully of ourselves to the building of the kingdom of God. As we embrace this spirit of consecration, the Lord guides and strengthens us to become instruments in His hands."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I have personally witnessed how the blessings of fasting often enter people’s lives quietly and tenderly—softening hearts, strengthening testimonies, sanctifying souls, and transforming lives."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " I have also seen sacred blessings come to those who turn their hearts toward God’s children through generous fast offerings. Personally, I have felt an increase of inspiration and revelation as I have sought to live this law with greater sincerity. Fasting, when observed with joy and joined with prayer and generosity, brings sweeter communion with the Lord and a deeper, more personal connection with Him."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My dear friends, I invite you to prayerfully ponder Isaiah’s teachings and more intentionally embrace the divine purpose of the law of the fast in a higher and holier way as part of our worship. As you do so, I promise, in the name of our Savior, Jesus Christ, that miracles will come into your life. You will draw nearer to the Savior, receive strength to overcome your weaknesses, and become more sensitive to the needs of others. Through this divinely appointed practice, the Lord will sanctify us and pour His Spirit and blessings more abundantly into our lives."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I bear my solemn testimony that as we remember, restore, and more fully honor the sacred purpose of the law of the fast with sincere hearts, the Lord will fulfill the promises declared by Isaiah: our “light [shall] break forth as the morning”; our “health shall spring forth speedily”; then shall we “call, and the Lord shall answer”; we shall cry, and He shall say, “Here I am.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " Of these things I bear my witness in His holy name, even Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "See Isaiah 58:1–7."
            },
            {
                "noteNumber": 2,
                "text": "Isaiah 58:8–9."
            },
            {
                "noteNumber": 3,
                "text": "Teachings of Presidents of the Church: Joseph F. Smith (1998), 198."
            },
            {
                "noteNumber": 4,
                "text": "See Helaman 3:35; see also Gospel Principles (2011), 147–48."
            },
            {
                "noteNumber": 5,
                "text": "See counsel, including for those who are not able to fast, from President Russell M. Nelson: “For all whose health may permit, let us fast, pray, and unite our faith once again. … How do we fast? Two meals or a period of 24 hours is customary. But you decide what would constitute a sacrifice for you, as you remember the supreme sacrifice the Savior made for you” (“Opening the Heavens for Help,” Liahona, May 2020, 74)."
            },
            {
                "noteNumber": 6,
                "text": "Isaiah 58:6."
            },
            {
                "noteNumber": 7,
                "text": "Teachings of Presidents of the Church: Joseph Smith (2007), 426."
            },
            {
                "noteNumber": 8,
                "text": "Alma 7:11, 12."
            },
            {
                "noteNumber": 9,
                "text": "See Marion G. Romney, “The Blessings of the Fast,” Ensign, July 1982, 4."
            },
            {
                "noteNumber": 10,
                "text": "See Tonja-Maree Davis, “Freely Given, Gratefully Received,” Ensign, Oct. 2009, 67–68."
            },
            {
                "noteNumber": 11,
                "text": "Isaiah 58:8–9."
            }
        ]
    },
    {
        "title": "The Hour of Your Mission Is Come",
        "author": "Sean Douglas",
        "authorRole": "Second Counselor in the Presiding Bishopric",
        "kicker": "To all the rising generation of the Church, I invite you to place serving a full-time mission high on your list.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As a member of the Presiding Bishopric, I have the privilege of serving on the Church’s Missionary Executive Council. I have a deep love for the missionaries of the Church. They are uniquely set apart from the world and divinely commissioned by the Savior."
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " As President Dallin H. Oaks teaches: “We invite all [of God’s children] to come unto Christ by repentance and baptism and confirmation in order to open the doors of the celestial kingdom to the sons and daughters of God. No one else can do this.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " Missionaries are called to assist in this great work."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Today more missionaries are serving in more missions and more of God’s children are choosing to enter the Lord’s Church through baptism than ever before in this dispensation."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We love missionaries of all ages. You are an army of righteousness with the doctrine of Christ as your purpose."
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " You are a force of faith, power, love, and joy. You are what you preach. You are not only the messengers but also living examples of the message."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " Make no mistake—you are doing the most important work you could be doing."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " We thank you for building up the kingdom of God on earth."
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A few months ago, I attended a sacrament meeting where my two great-nephews, who are brothers, spoke before departing for their missions. They were beaming with enthusiasm and eager to get going. Maybe it was because their assignments are thousands of miles from home at opposite ends of the earth. But in truth, their desire to serve the Lord was unmistakable."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "They reminded me of the sons of Mosiah in the Book of Mormon, who “were desirous that salvation should be declared to every creature, for they could not bear that any human soul should perish.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Their desire to serve the Lord rose above every other personal ambition."
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " It’s what makes missionaries special; it’s why they radiate the Light of Christ and teach with convincing power."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " For a season, all else takes a back seat—education, dating, careers, family time, and even sleeping in on Saturday mornings. Yes, the Lord’s expectations are high for you!"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " But, oh, is it worth it!"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " President Russell M. Nelson taught, “Nothing else compares in magnitude, nothing else compares in importance, nothing else compares in majesty.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God held you in reserve for this time."
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " You were taught and prepared, before you were born, to invite God’s children to come unto Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " We could say this is in your spiritual DNA. Take care not to become distracted."
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " Prioritize it; don’t let anything get in the way. You are needed!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Sister Douglas and I served as mission leaders in Lima, Peru. One of our amazing missionaries was Elder Merlin Sanchez. Merlin was baptized when he was nearly 24 years old. As some do, he stopped participating for a time. A faithful friend helped him begin to fill out his mission papers and schedule a physical exam, even though Merlin had not yet decided to serve a mission."
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Elder Merlin Sanchez with his mission leaders.",
                "src": "https://www.churchofjesuschrist.org/imgs/e7jbzsodz5el72m0tg48q85kerzccidy7pmnhsfd/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "With the help of friends and leaders, Merlin returned to church at age 25. A desire to serve a mission suddenly swelled in his heart. Thankfully, his mission papers were well advanced. Once he made the decision to go, it was miraculous to see how the Lord removed seemingly insurmountable obstacles one by one. When I asked him why he wanted to serve, he replied, “I only want to be close to Jesus Christ and to follow Him.”"
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Elder Sanchez with his mission leaders and companion.",
                "src": "https://www.churchofjesuschrist.org/imgs/uked0rrbx71zn0qzfkhopw9vq0epnticmiwxum4r/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He became a wonderful missionary, converted to Jesus Christ and His doctrine. His every experience, trial, and companion was consecrated for his gain."
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " Interestingly, Elder Sanchez served with the same companion twice, for a total of eight months. Though opposite in personality, they became united in purpose—assigned together by divine design."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Merlin met his eternal sweetheart, Gali, just a few months following his mission. On the day of their marriage, he was called to be a bishop—quite the wedding gift! There was no time for his discipleship to be interrupted or his faith to be diminished. After all, serving a mission is just one of many significant steps on the path of lifelong discipleship."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "The Sanchez family today.",
                "src": "https://www.churchofjesuschrist.org/imgs/2vwu5066fuw46xhf0nyrhjoel1qzxhcc55deygan/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Merlin and Gali today have a beautiful family with three children, while Merlin serves as a stake president. They cannot fathom what their lives would be if Merlin had not served a mission."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "To you wonderful young converts of the Church, a mission may not have been on your radar, but it ought to be now. To all the rising generation of the Church, I invite you to place serving a full-time mission high on your list. Don’t be distracted by alternatives of far less worth."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    },
                    {
                        "type": "text",
                        "text": " Some might be like Amulek of the Book of Mormon, who expressed, “For I was called many times and I would not hear.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Prophets of God today strongly reaffirm “that the Lord has asked "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "every"
                    },
                    {
                        "type": "text",
                        "text": " worthy, able young man to prepare for and serve a mission. For [you], missionary service is a priesthood responsibility. … For you young and able sisters, a mission is also a powerful, but "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "optional"
                    },
                    {
                        "type": "text",
                        "text": ", opportunity. … Pray to know if the Lord would have you serve a mission.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We rejoice exceedingly for your faithful response to the prophet’s call to action."
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " Record numbers of missionaries of all ages are finding great joy as they humbly dedicate themselves to serving the Lord by laboring among Heavenly Father’s children. I wish to wholeheartedly add: There is still plenty of room and a special place reserved for each one of you! We need you! “Come join the ranks!”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "You have a testimony of Jesus Christ and His Atonement that can bless a world suffering without knowledge of His divine mission."
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    },
                    {
                        "type": "text",
                        "text": " I pray that you will make the Savior’s grand commission your very own."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I conclude with the words of our Savior given through Joseph Smith to Thomas B. Marsh, who was called to preach the gospel in 1830. I invite each of you to substitute your name for Thomas’s:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Thomas, my son [or daughter], …"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Lift up your heart and rejoice, for the hour of your mission is come; and your tongue shall be loosed, and you shall declare glad tidings of great joy unto this generation. …"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Therefore, thrust in your sickle with all your soul, and your sins are forgiven you, and you shall be laden with sheaves upon your back. … Wherefore, your family shall live."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Behold, … go from them only for a little time, and declare my word, and I will prepare a place for them."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“… I will open the hearts of the people, and they will receive you. And I will establish a church by your hand.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "24"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "See Matthew 28:19–20; 1 Timothy 1:11–12."
            },
            {
                "noteNumber": 2,
                "text": "Dallin H. Oaks, “The Purpose of Missionary Work” (missionary satellite broadcast, Apr. 1995); see also Preach My Gospel: A Guide to Sharing the Gospel of Jesus Christ (2023), 148. President Russell M. Nelson also taught: “The Lord has commanded that we spread the gospel and share the covenant. That is why we have missionaries. He wishes for every one of His children to have the opportunity to choose the Savior’s gospel and embark upon the covenant path” (“The Everlasting Covenant,” Liahona, Oct. 2022, 9)."
            },
            {
                "noteNumber": 3,
                "text": "Preach My Gospel states, “The gospel of Jesus Christ defines both your message and your purpose” (page 6); see Ephesians 6:11, 14–17; 3 Nephi 5:13; Doctrine and Covenants 35:13–14."
            },
            {
                "noteNumber": 4,
                "text": "See 2 Corinthians 3:2–3."
            },
            {
                "noteNumber": 5,
                "text": "President Russell M. Nelson taught: “My dear extraordinary youth, you were sent to earth at this precise time, the most crucial time in the history of the world, to help gather Israel. There is nothing happening on this earth right now that is more important than that. There is nothing of greater consequence. Absolutely nothing” (“Hope of Israel” [worldwide youth devotional, June 3, 2018], Gospel Library)."
            },
            {
                "noteNumber": 6,
                "text": "See Doctrine and Covenants 31:7; 39:13."
            },
            {
                "noteNumber": 7,
                "text": "Mosiah 28:3."
            },
            {
                "noteNumber": 8,
                "text": "Preach My Gospel teaches: “As your understanding and testimony of the Savior and His Atonement grow, your desire to share the gospel will increase. You will feel, as Lehi did, the ‘great … importance to make these things known unto the inhabitants of the earth’ (2 Nephi 2:8)” (page 2); see Doctrine and Covenants 4:3; 11:17."
            },
            {
                "noteNumber": 9,
                "text": "See 3 Nephi 18:24; Doctrine and Covenants 11:21."
            },
            {
                "noteNumber": 10,
                "text": "See Matthew 5:48; Mark 10:21; 3 Nephi 12:48; 27:27. Note the high love of the Savior, along with the high expectations."
            },
            {
                "noteNumber": 11,
                "text": "See Doctrine and Covenants 31:5–6."
            },
            {
                "noteNumber": 12,
                "text": "Russell M. Nelson, “Hope of Israel.” President Nelson also explained, “Every one of our Heavenly Father’s children … deserves to hear the message of the restored gospel of Jesus Christ.”"
            },
            {
                "noteNumber": 13,
                "text": "See Russell M. Nelson, “Hope of Israel.”"
            },
            {
                "noteNumber": 14,
                "text": "See Doctrine and Covenants 138:55–56."
            },
            {
                "noteNumber": 15,
                "text": "See Doctrine and Covenants 58:14, 16; 121:34–35."
            },
            {
                "noteNumber": 16,
                "text": "“Unto such shall ye continue to minister; for ye know not but what they will return and repent, and come unto me with full purpose of heart, and I shall heal them; and ye shall be the means of bringing salvation unto them” (3 Nephi 18:32)."
            },
            {
                "noteNumber": 17,
                "text": "See 2 Nephi 2:2."
            },
            {
                "noteNumber": 18,
                "text": "Nephi poignantly asks this question: After entering into the strait and narrow path, is all done? (see 2 Nephi 31:19–20; see also Doctrine and Covenants 10:33)."
            },
            {
                "noteNumber": 19,
                "text": "Alma 10:6."
            },
            {
                "noteNumber": 20,
                "text": "Russell M. Nelson, “Preaching the Gospel of Peace,” Liahona, May 2022, 6."
            },
            {
                "noteNumber": 21,
                "text": "See Doctrine and Covenants 88:72–73."
            },
            {
                "noteNumber": 22,
                "text": "“We Are All Enlisted,” Hymns, no. 250."
            },
            {
                "noteNumber": 23,
                "text": "See Dallin H. Oaks, “The Only True and Living Church” (address given at the seminar for new mission leaders, June 20, 2026)."
            },
            {
                "noteNumber": 24,
                "text": "Doctrine and Covenants 31:1, 3, 5–7."
            }
        ]
    },
    {
        "title": "O Be Wise",
        "author": "D. Todd Christofferson",
        "authorRole": "Second Counselor in the First Presidency",
        "kicker": "My plea is not only to refrain from gambling but to use the time and resources saved thereby for doing good.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Today I feel a bit like the Book of Mormon prophet Jacob, when he felt compelled by the Spirit to address subjects that were not particularly edifying, having to use “boldness of speech,” as he put it, instead of feasting on “the pleasing word of God.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " So, with a sense of duty, I turn to the subject of gambling."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Gordon B. Hinckley, in addressing this subject over 20 years ago, mentioned a story about former United States President Calvin Coolidge, known as a man of few words. As Coolidge returned home from church one Sunday, his wife asked him what the preacher spoke about. He replied, “Sin.” "
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Well, what did he say?” she asked. "
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“He was against it,” replied Coolidge. "
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Hinckley said, “I think I could answer the question concerning gambling just that briefly. We are against it.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Putting money or something of value at risk to bet on a particular outcome or event is an activity that has plagued mankind almost, I suppose, from the beginning of time. And time has not made it any more worthwhile or any less harmful."
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " Unfortunately, in recent years, gambling has become incredibly pervasive."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The smartphone has transformed gambling from an occasional activity requiring a trip to a casino, racetrack, or lottery kiosk"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " into an activity available continuously, privately, and almost anywhere. This has led to an explosion in gambling. Worldwide surveys spanning multiple years indicate that 46 percent of adults gambled in the last 12 months—that is about 2.3 billion people."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " The global gambling industry generated estimated revenues of $758 billion in 2025."
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " Of course, the industry’s revenue is the gambler’s loss. Simply put, the industry’s entire business model is built on its customers losing money."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The growth in worldwide gambling is primarily driven by three new online markets. First is online sports betting, which involves wagers on sports scores, statistics, or events. Second is online casino-type games, sometimes referred to as internet or iGaming: slot games, roulette, blackjack, poker, and so on. A third, relatively new platform is what are called “prediction markets” that allow participants to bet on whether something will or will not happen and when. It could be tied to anything: interest rates, elections, sports, wildfires, or even, if you can imagine, the timing of the Second Coming."
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " (Where would you go to collect on that bet?)"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Youth and young adults are disproportionately affected. For this demographic, impulsivity and peer influence are compounded by early exposure, easy online access, and intense marketing. Widespread social acceptance only adds to the enticement. Sports betting is especially rampant among teenagers and young adults. It easily becomes consuming and often compulsive. It robs time from studies, relationships, and career development. It crowds out things of value and in their place fosters greed."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the United States, 36 percent of boys age 11 to 17 reported gambling last year, rising from 32 percent at age 11 to 49 percent—virtually half of all boys—at age 17."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " Equally troubling is the substantial percentage of 18- to 29-year-old women who now participate in gambling each year, especially mobile sports betting, slots, and lotteries."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Surveys reveal that people know that in gambling the odds are stacked against them, and the house always wins—they just don’t think it will win against them personally."
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " But the central risk of gambling is not merely that customers lose money on individual wagers. The larger concern is that continuous, mobile access can transform occasional entertainment into repeated behavior that displaces saving, increases debt, and creates far-reaching family and social costs. I have to agree with George Washington when he said of gambling, “It is the child of avarice—the brother of inequity—and father of mischief”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    },
                    {
                        "type": "text",
                        "text": " (although calling it “mischief” may be too mild)."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Earlier this year a prominent journalist wrote in "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "The Atlantic"
                    },
                    {
                        "type": "text",
                        "text": " magazine about his preplanned, monthslong experience with sports gambling. Among other things, he noted: “Experts estimate that only about 2 to 5 percent of gamblers will develop compulsive behaviors. But … that small "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "percentage"
                    },
                    {
                        "type": "text",
                        "text": " becomes a very large "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "number"
                    },
                    {
                        "type": "text",
                        "text": " when tens of millions of [people] suddenly have casinos in their pockets.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He concluded: “As a society, we are making an enormously risky bet: that we can reap the rewards of a runaway gambling industry without paying any price; [we are betting] that the litany of social ills long associated with this vice—addiction and impoverishment, isolation and abuse, cheating and … corrosive idleness—can, this time, be kept in check; [we are betting] that, unlike every civilization that came before us, we can beat the house.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "At different times, President Dallin H. Oaks has reminded us that “as we make current decisions, we should always be asking, ‘Where will this lead?’ … What is the effect on our future of the decisions we make in the present?” President Oaks points out that each choice has an “opportunity cost,” that is, “if we spend time doing one thing, we lose the opportunity to do another.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " What is the opportunity cost of gambling? What do you forgo in terms of money, time, relationships, and worthwhile pursuits? Where does it lead?"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Perhaps you think your character and your commitment to divine covenants are sufficiently strong that, for you, wagers would never become more than occasional, casual fun. Maybe. But whether you are right about that or not, have you considered how your example might affect others?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "If your moral standing is secure, then undoubtedly there are others who look to you as a guide for upright living. That would certainly be true for your children but also others that you may or may not know who are watching and learning from what they see in you. They may be newer or weaker in the faith. A little gambling that seemingly has only a minor impact in your life may be more costly to them if they take license from your example."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Apostle Paul noted in his day that someone with a firm belief in Christ could eat food sacrificed to idols without intending it as a sign of idol worship; it would just be a meal. But he cautioned the disciples to abstain anyway."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Take heed,” he said, “lest by any means this liberty of yours become a stumblingblock to them that are weak. "
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“For if any man see thee which hast knowledge [of the gospel] sit at meat in the idol’s temple, shall not the conscience of him which is weak be emboldened to eat those things which are offered to idols; "
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“And through thy [conduct] shall the weak brother perish, for whom Christ died?”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the context of my message today, Paul is saying, “Since your recreational gambling may lead a weaker brother or sister into temptation, just don’t do it. Every soul is precious, and Christ died for him, for her, as He did for you.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For us as Latter-day Saints, overarching all other concerns is the fact that gambling is morally wrong. Gambling is built on the desire to obtain something for nothing. Its structure requires that any gain comes at others’ expense. It’s hard to reconcile that with the commandment to love our neighbor as ourselves."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    },
                    {
                        "type": "text",
                        "text": " In addition, our resources are stewardships, and the question is not merely whether a purchase is legal but whether it builds anything—in us, in our families, or in those around us. In the end, gambling produces nothing of value and enriches only its purveyors."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Oaks clearly stated the moral case against gambling some years ago in these words: “What does gambling do to its participants? The "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "attitude"
                    },
                    {
                        "type": "text",
                        "text": " of taking something from someone else in order to enhance our own position—[which is] the essence of gambling—leads us away from the "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "giving path"
                    },
                    {
                        "type": "text",
                        "text": " of Christ and toward the "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "taking path"
                    },
                    {
                        "type": "text",
                        "text": " of the adversary. The "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "act"
                    },
                    {
                        "type": "text",
                        "text": " of taking or trying to take something from someone else without giving value in return is destructive of spiritual sensitivities.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Today, I am pleading with all of us to live life on a higher plane. God has granted life and agency to each of us, and each of us is accountable to Him for how we live that life. A key part of a life well-lived is contributing to the well-being of others. It is being productive in worthy endeavors. It is being and doing better without others doing worse. It comes by supporting and rewarding work rather than idle pursuits. Work leads to prosperous, just, and equitable societies. Gambling, even for fun, leads in the opposite direction."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Remembering President Oaks’s comments about “opportunity cost” and the opportunities lost when a person devotes time and money to gambling, my plea again is not only to refrain from gambling but to use the time and resources saved thereby for doing good. The Lord counsels us to “be anxiously engaged in a good cause, … "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "and bring to pass much righteousness"
                    },
                    {
                        "type": "text",
                        "text": ".”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " Indeed, “blessed are all they who do hunger and thirst after righteousness, for they shall be filled with the Holy Ghost.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " If we hunger and thirst after righteousness, there are many good things we will pursue and other things that, because they are incompatible with righteousness, we will put out of our lives entirely."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I pray that you will not treat gambling lightly. Having begun these remarks quoting the prophet Jacob, I end with another of his statements: “O be wise; what can I say more?”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    },
                    {
                        "type": "text",
                        "text": " In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "See Jacob 2:7–9."
            },
            {
                "noteNumber": 2,
                "text": "Gordon B. Hinckley, “Gambling,” Liahona, May 2005, 58."
            },
            {
                "noteNumber": 3,
                "text": "It is troubling that some people consider gambling a form of investment. A recent survey of 1,000 retail investors in the United States found that approximately 12 percent view sports betting as a deliberate part of their long-term investment strategy. The ﬁgure rises to 26 percent among Gen Z investors. More than half of Gen Z respondents also reported redirecting money originally intended for investing toward sports betting (see “Betterment Retail Investment Survey 2026: The Guidance Gap,” Aug. 11, 2026, betterment.com/retail-report). Bets and investments both carry risks, but there is a big difference between them. Investments tend to make money on average over time, while bets tend to lose money. The returns on investment come from the creation of value to others. In contrast, the winnings from betting come from the losses of someone else."
            },
            {
                "noteNumber": 4,
                "text": "Some assert that government-sponsored lotteries are the virtuous exception in the sordid world of gambling since revenues are earmarked to support education and other public benefits. But financing these benefits through the sale of lottery tickets represents, in effect, a regressive tax borne largely by those who can least afford it. Additionally, it is likely that a substantial portion of lottery revenues used for salutary purposes will be offset by increased welfare and social costs arising from gambling losses, including lottery purchases."
            },
            {
                "noteNumber": 5,
                "text": "See Lucy T. Tran and others, “The Prevalence of Gambling and Problematic Gambling: A Systematic Review and Meta-Analysis,” The Lancet Public Health, vol. 9, no. 8 (Aug. 2024), thelancet.com."
            },
            {
                "noteNumber": 6,
                "text": "See H2 Gambling Capital, “H2 Market Data Update: IMF Data Extension to 2031,” Apr. 30, 2026, 1, h2gc.com."
            },
            {
                "noteNumber": 7,
                "text": "See, for example, Alex Klavens, Walt Bogdanich, and Jenny Vrentas, “How DraftKings Uses A.I. to Target the Gamblers Likeliest to Lose,” New York Times, Sept. 19, 2026, nytimes.com."
            },
            {
                "noteNumber": 8,
                "text": "It has been argued that participating in prediction markets is not gambling but rather investing or hedging through purchase of derivative or event contracts (regulated in the United States by the Commodity Futures Trading Commission). While some event contracts can be used to hedge actual economic risk, almost all prediction-market trading does not serve that purpose and is functionally no different from other forms of gambling. It is wagering that happens to use a financial-market structure."
            },
            {
                "noteNumber": 9,
                "text": "See Michael B. Robb and Supreet Mann, “Betting on Boys: Understanding Gambling Among Adolescent Boys,” Common Sense Media (2026), commonsensemedia.org."
            },
            {
                "noteNumber": 10,
                "text": "From a recent nationwide gambling survey in the United States commissioned by the Brigham Young University Wheatley Institute, scheduled for publication later this year."
            },
            {
                "noteNumber": 11,
                "text": "See Brigham Young University Wheatley Institute Survey, 2026."
            },
            {
                "noteNumber": 12,
                "text": "George Washington, “From George Washington to Bushrod Washington, 15 January 1783,” founders.archives.gov; spelling and capitalization modernized."
            },
            {
                "noteNumber": 13,
                "text": "McKay Coppins, “Sucker: My Year as a Degenerate Gambler,” Atlantic, Mar. 12, 2026, theatlantic.com; emphasis added."
            },
            {
                "noteNumber": 14,
                "text": "Coppins, “Sucker: My Year as a Degenerate Gambler.” "
            },
            {
                "noteNumber": 15,
                "text": "Dallin H. Oaks, “Where Will This Lead?,” Liahona, May 2019, 60–61; see also Dallin H. Oaks, “Where Will It Lead?” (Brigham Young University devotional, Nov. 9, 2004), speeches.byu.edu."
            },
            {
                "noteNumber": 16,
                "text": "“The conversation around gambling has become too binary. We tend to imagine two categories of people. There are normal gamblers who are just having fun and then there are gambling addicts whose lives are falling apart. But there is a huge amount of territory between those two things. You can have a job, you can go to class, you can pay your rent, you can go your whole life without ever calling a gambling hotline or attending a Gamblers Anonymous meeting and you can still lose a huge amount of money and time and agency and peace of mind to these betting apps. You can still find that gambling is warping your psyche” (McKay Coppins, “The Casino-fication of America: How Online Gambling Hooked a Generation,” Wheatley Institute, Sept. 15, 2026, wheatley.byu.edu)."
            },
            {
                "noteNumber": 17,
                "text": "1 Corinthians 8:9–11; see also Doctrine and Covenants 108:7."
            },
            {
                "noteNumber": 18,
                "text": "See Matthew 22:39."
            },
            {
                "noteNumber": 19,
                "text": "Dallin H. Oaks, “Gambling—Morally Wrong and Politically Unwise,” Ensign, June 1987, 70; from an address given at a Ricks College devotional, Jan. 6, 1987, byui.edu/speeches; emphasis in original and added."
            },
            {
                "noteNumber": 20,
                "text": "Doctrine and Covenants 58:27; emphasis added."
            },
            {
                "noteNumber": 21,
                "text": "3 Nephi 12:6; see also Matthew 5:6."
            },
            {
                "noteNumber": 22,
                "text": "Jacob 6:12."
            }
        ]
    },
    {
        "title": "“How Long Will It Be Ere They Believe Me?”",
        "author": "Dale G. Renlund",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "We can experience joy in our here and now because of Jesus Christ and through our covenant relationship with Him.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the late 1980s, Mr. Martin"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " developed severe heart failure. Despite the most advanced medications available, his heart could not adequately support his circulation. He would die without a heart transplant. He became my team’s patient, and the wait for a donor heart began. His condition worsened, and mechanical pumps were implanted to sustain his life."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A few days later, Mr. Martin’s liver, kidneys, and lungs began to fail. If a donor heart did not become available soon, he would surely die. One became available, and Mr. Martin received a transplant. Surprisingly, this new heart did not work well, and his condition was now even worse. After a couple of days, the situation seemed hopeless, and we were preparing to withdraw life support. While discussing the limited options with Mrs. Martin, I was notified that another donor heart was available. This donor heart was considered marginal and would not be used for any other recipient in the country. With Mrs. Martin’s consent, we decided to use this marginal heart for a second transplant."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Fortunately, the marginal heart functioned beautifully. Within hours, Mr. Martin’s liver, kidneys, and lungs began to recover, and the mechanical pumps were removed. Ten days later, I walked into Mr. Martin’s hospital room, knowing that he would be discharged from the hospital the next day. He was sitting on his bed, gripping his breakfast tray, and was clearly irritated. I asked what was wrong. Through clenched teeth, Mr. Martin replied, “The oatmeal"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " isn’t hot, and the milk isn’t cold!”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For the past three weeks, Mr. Martin had hovered near death yet was now complaining about the hospital food! (I think when you go through something like Mr. Martin did, you use up all your coping coupons. And I don’t think anybody should be tortured with oatmeal regardless of temperature.) But at that moment, Mr. Martin focused on the cold oatmeal in front of him and seemingly dismissed the miracle he had experienced. He lost sight of the bigger picture, both where he had been and the promise the future now held."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We too can easily fall into the same trap that Mr. Martin did that morning in the hospital, especially when our day-to-day challenges loom. We focus on the here and now—the “cold oatmeal”—and lose sight of the bigger picture, both where we have been and God’s promises to us."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "This is not just a modern phenomenon. As recorded in the Old Testament, the Lord led the children of Israel out of slavery in Egypt. God saved them when they were trapped at the Red Sea"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " and provided for them when they lacked food"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " and water."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Even when they complained about a monotonous diet, the Lord miraculously helped them."
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " They survived because of God’s miracles, yet they repeatedly focused on cold oatmeal. As they overlooked both the Lord’s blessings and His promises, their trust eroded in God and in God’s prophet, Moses."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When the children of Israel reached the promised land, they were intimidated by the challenges ahead. They again bemoaned their situation, saying, “Would God that we had died in the land of Egypt! or would God we had died in this wilderness!”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " In other words, they thought that they had it better before and that this challenge was surely too much, even for the Lord."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Scripture records the Lord’s response: “And the Lord said unto Moses, … how long will it be ere they believe me, for all the signs which I have [shown] among them?”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " In other words, the Lord was asking: “Why don’t they trust me? Despite all I have done, why won’t they believe me?” How often the Lord reassured the children of Israel, and reassures us, of His constancy, declaring, “I will never break my covenant with you.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Perhaps you have been served more than your share of cold oatmeal. Perhaps, like the children of Israel, you have doubted God’s care for you, His willingness to succor you, or His capacity to keep His promises. Yet God invites us to trust Him and His promises. "
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "During His mortal ministry, the Savior told His disciples: “These things I have spoken unto you, that in "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "me"
                    },
                    {
                        "type": "text",
                        "text": " ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    },
                    {
                        "type": "text",
                        "text": " Jesus overcame the world; we do not have to do so ourselves. When our faith is centered on Jesus Christ, He promises spiritual peace no matter our circumstances. We can experience joy in our here and now because of Him and through our covenant relationship with Him."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Faith in Jesus Christ frees us from uncertainty because our hope rests on His faithfulness and righteousness, not on our own. The prophet Lehi testified to his son Jacob, “Wherefore, I know that thou art redeemed, because of the righteousness of thy Redeemer.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " Jacob was a good and faithful person. Yet his righteousness would not be the source of his redemption. No, Jacob’s redemption would come through the righteousness of Jesus Christ. The same is true for each of us."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "One of the purposes of the Book of Mormon is to show us “what great things the Lord hath done … that [we] may know the covenants of the Lord, that [we] are not cast off forever.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " Moroni exhorts us “that [we should] remember how merciful the Lord hath been unto the children of men [throughout the ages], and ponder it in [our] hearts.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As we reflect on the great things the Lord has already done and remember His goodness and mercy, we are better positioned to grasp the bigger picture and to rely on His promises to us. We can trust Him."
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I remember learning a lesson, one of many, from my younger sister, Linda. She said that she would read her scriptures and see remarkable blessings promised by the Lord. In her mind, though, she saw a big asterisk that seemed to say, “Those blessings apply to everyone—except Linda.” Over the years, Linda came to a different realization. She said, “I am not extraordinary enough to warrant an exception. The blessings are promised to me too.” Linda is extraordinary but still no exception. Neither are you, brothers and sisters; there is no asterisk excluding you from God’s richest blessings. If you think there is, take out a big eraser and obliterate that asterisk. You can rely on God’s promises."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Prophet Joseph Smith taught that Jesus Christ “knows the situation of both the living and the dead, and has made ample provision for their redemption, according to their several circumstances, and the laws of the kingdom of God, whether in this world, or in the world to come.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Ample provision” means that all human circumstances are within the Savior’s redemptive reach. The Atonement of Jesus Christ permitted our Heavenly Father to give the Savior all power “in heaven and in earth.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    },
                    {
                        "type": "text",
                        "text": " The power of the Messiah to save and exalt is profoundly intimate and infinite beyond human comprehension; there is more than enough to cover any breach, need, or deficit for all of us, for each of us."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When I consider what Jesus Christ has done for us, I do not think we want Him asking us, “How long will it be ere [you] believe me?”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    },
                    {
                        "type": "text",
                        "text": " Strive to remember all the times He has inclined His ear to you, especially when confronted with cold oatmeal."
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " With Moroni, I declare, “The eternal purposes of the Lord shall roll on, until all his promises shall be fulfilled.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " We can trust the Lord, especially His promises. These promises apply to you. We can joyfully sing:"
                    }
                ]
            },
            {
                "type": "poetry",
                "stanzas": [
                    [
                        {
                            "nodes": [
                                {
                                    "type": "text",
                                    "text": "Standing on the promises of Christ, my King, …"
                                }
                            ]
                        },
                        {
                            "nodes": [
                                {
                                    "type": "text",
                                    "text": "Standing on the promises that cannot fail …"
                                }
                            ]
                        },
                        {
                            "nodes": [
                                {
                                    "type": "text",
                                    "text": "Standing on the promises, I cannot fall, …"
                                }
                            ]
                        },
                        {
                            "nodes": [
                                {
                                    "type": "text",
                                    "text": "Standing on the promises of God."
                                },
                                {
                                    "type": "note",
                                    "noteNumber": "22"
                                }
                            ]
                        }
                    ]
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I know that God lives and that Jesus is the Christ. Not only that, but I also know that Their “exceeding great and precious promises” are sure and “that by these [we] might be partakers of the divine nature, having escaped the corruption that is in the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    },
                    {
                        "type": "text",
                        "text": " Of this I bear solemn witness in the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Not his real name."
            },
            {
                "noteNumber": 2,
                "text": "In the late 1980s, these mechanical pumps were useful for only a short time."
            },
            {
                "noteNumber": 3,
                "text": "Oatmeal is a thick porridge made by boiling oats in water or milk, typically served hot."
            },
            {
                "noteNumber": 4,
                "text": "Mr. Martin went on to live many additional years with an excellent quality of life."
            },
            {
                "noteNumber": 5,
                "text": "See Exodus 14:11–12."
            },
            {
                "noteNumber": 6,
                "text": "See Exodus 16:2–4."
            },
            {
                "noteNumber": 7,
                "text": "See Exodus 17:3–6."
            },
            {
                "noteNumber": 8,
                "text": "See Numbers 11:4–6, 31–32."
            },
            {
                "noteNumber": 9,
                "text": "Numbers 14:2; see also verses 3–4."
            },
            {
                "noteNumber": 10,
                "text": "Numbers 14:11."
            },
            {
                "noteNumber": 11,
                "text": "Judges 2:1."
            },
            {
                "noteNumber": 12,
                "text": "John 16:33; emphasis added."
            },
            {
                "noteNumber": 13,
                "text": "2 Nephi 2:3."
            },
            {
                "noteNumber": 14,
                "text": "Title page of the Book of Mormon."
            },
            {
                "noteNumber": 15,
                "text": "Moroni 10:3."
            },
            {
                "noteNumber": 16,
                "text": "Recording our own experiences is helpful. President Henry B. Eyring suggested that each day we should ask ourselves, “Have I seen the hand of God reaching out to touch us or our children or our family today?” He promised that as we did so, we would see evidence of what God had done. That will cause gratitude to grow in our hearts and testimonies will grow (“O Remember, Remember,” Liahona, Nov. 2007, 67)."
            },
            {
                "noteNumber": 17,
                "text": "Teachings of Presidents of the Church: Joseph Smith (2007), 407."
            },
            {
                "noteNumber": 18,
                "text": "Matthew 28:18."
            },
            {
                "noteNumber": 19,
                "text": "Numbers 14:11."
            },
            {
                "noteNumber": 20,
                "text": "See Psalm 116:2."
            },
            {
                "noteNumber": 21,
                "text": "Mormon 8:22."
            },
            {
                "noteNumber": 22,
                "text": "“Standing on the Promises,” Hymns for Home and Church, Gospel Library."
            },
            {
                "noteNumber": 23,
                "text": "2 Peter 1:4."
            }
        ]
    },
    {
        "title": "Divine Appointments",
        "author": "Timothy L. Farnes",
        "authorRole": "Young Men General President",
        "kicker": "As covenant followers of Jesus Christ, we minister with compassion to whomever God places in our path.",
        "bodySections": [
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It’s What We Do, Isn’t It?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I’ll never forget a Saturday almost 20 years ago. I had just been called into a stake presidency and hadn’t yet been released as bishop. We had five young children, a business to run, and a full day of Church meetings, starting at 8:00 a.m. and concluding with a ward temple night. It was a busy time, and I wanted to give my all to the Lord, but I was never sure if I had enough to give."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "At a midday leadership meeting, the presiding authority invited questions. I gathered my courage and asked a question about an administrative matter that was troubling me. Instead of getting a helpful answer, I felt like my question was dismissed. I felt a little disheartened and unappreciated. I questioned why I was sacrificing so much if I was going to feel this way."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I left that meeting with no desire to attend the ward temple night. I called my wife, told her how discouraged I was, and said, “Let’s go to dinner instead of the temple.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Linsey wisely responded, “No, I think you need to be in the temple. We’ll talk after.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "So I went to the temple, but not with the best attitude."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As I entered the dressing room, grumbling to myself, I heard someone say, “How are you, brother?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It was Elder Dallin H. Oaks."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We had never met before, and I wasn’t about to tell a member of the Quorum of the Twelve Apostles how discouraged I felt. So I forced a smile and said, “Everything’s great!”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I changed into my temple clothes, and as I walked out, to my surprise, Elder Oaks was waiting for me."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He said, “Brother, tell me how you are really doing.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Something about the compassion in his voice helped me open up. Elder Oaks listened. He expressed sincere gratitude, said some encouraging words, and even answered my administrative question. Then he gave me a big hug, and in an instant I went from feeling like giving up to feeling like I could give my whole soul in service to the Lord."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Five years later, my wife and I were invited to meet with Elder Oaks in his office. You can imagine my excitement to reminisce about the experience we had shared. I asked him, “Do you remember the conversation we had in the temple?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“I don’t think so,” he said. “Have we met before?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I recounted the experience and reminded him how his act of compassion had lifted my spirits and changed my life."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Elder Oaks responded, “I’m sorry, brother. I don’t remember that.” Then, sensing my disappointment, he added, “But "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "it’s what we do. Isn’t it?"
                    },
                    {
                        "type": "text",
                        "text": "”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Those words have stayed with me ever since. That "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "is"
                    },
                    {
                        "type": "text",
                        "text": " what we do. As covenant followers of Jesus Christ, we minister with compassion to whomever God places in our path."
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " We do it because that’s what the Savior did. And we’ve made a covenant to follow Him."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A Covenant of Compassion"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Each Sabbath day, when you and I partake of the sacrament, we witness to our Father in Heaven our willingness to take upon ourselves the name of His Son, Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " That means we choose to see as He sees, feel as He feels, and do as He would do. His life should be reflected in ours. It means that when someone encounters us, they should experience something of Jesus Christ—His kindness, His patience, His hope, His love, His compassion."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our promise of willingness is met by the Lord’s promise that we can always have His Spirit with us."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " With that gift, we can minister as the Savior would, with His power and His loving kindness."
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "make"
                    },
                    {
                        "type": "text",
                        "text": " the covenant during sacred time with God every Sunday. A way we "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "keep"
                    },
                    {
                        "type": "text",
                        "text": " the covenant is by ministering to God’s children every day."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Often this happens when God places someone in our path and we have eyes to see them."
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " I call these “divine appointments.”"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Eyes to See"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When Jesus was asked, “What shall I do to inherit eternal life?”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " He answered with a story about a man who had eyes to see. In the story, a traveler lay wounded on the road to Jericho. Where others saw an inconvenience or an interruption, one man saw an opportunity to minister—a divine appointment. Seeing awakened compassion. Compassion moved him to act. And his actions changed a life forever."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "This pattern defined the Savior’s ministry. He turned ordinary encounters with people into extraordinary moments of healing, encouragement, and transformation."
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " To Jesus, these people were not interrupting His mission. They "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "were"
                    },
                    {
                        "type": "text",
                        "text": " His mission."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God has given us eyes to see. When we use them, we begin to recognize divine appointments all around us. What once looked like random encounters become invitations from the Lord to minister with compassion."
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "That’s what the Savior did. It’s what His prophet does. And it’s what we do, isn’t it?"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Minister to the One God Places in Your Path"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A few years ago, my wife and I were waiting to board a flight for a much-needed vacation. We arrived at the airport early, and I put my earbuds in and started reading a book, thankful for a few quiet moments to myself."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Before long, I glanced up and saw a young missionary sitting across from me. He looked frightened and anxious. His eyes were closed, he was rocking back and forth, and tears were streaming down his cheeks. Clutched in his hands were his boarding pass and a digital alarm clock."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "After briefly imagining the various reasons a missionary might look so anxious, I returned to my book. But the Spirit prompted me to "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "look again"
                    },
                    {
                        "type": "text",
                        "text": "."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When I did, I saw his tear-filled eyes looking at me, pleading for help."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Are you OK?” I asked."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In broken, timid English, he explained that he was on the way to his mission, it was going to be his first time on an airplane alone, and he was terrified. I learned he was a long way from his home country and he was holding the alarm clock to make sure he didn’t miss the plane."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Embarrassed by how slow I had been to help this elder, I explained that my wife and I would be on the same flight, and we would make sure he made it on the plane."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Linsey and I walked him to the gate and showed him the door he would go through. Soon it was our turn to board, so Linsey and I left him at the gate and took our seats."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the plane filled up, we anxiously watched for our missionary friend, but there was no sign of him. I worried we had made a big mistake by boarding without him."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Finally, there he was—like every missionary, the last one to board—still clutching his boarding pass and alarm clock, making his way toward the only empty seat, at the back of the plane."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It was the seat next to me."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We smiled at each other, amazed at how God had arranged even a small detail like that one. Then the elder, finally relaxing a bit, fell fast asleep."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When we landed, I woke him, and the panic returned to his face as he worried about what to do next. Where was he supposed to go? What if there was no one waiting for him?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Linsey and I helped him get off the plane and walked him, arm in arm, not to lose him again, all the way to the baggage claim area. Waiting for him there were his mission leaders. Knowing what a special moment this always is, we were excited to see this new missionary being greeted by his leaders for the very first time."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But to our surprise, our friend didn’t run to his mission leaders. Instead, he dropped his bags and gave Linsey and me a big hug of love and appreciation."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What we did for that elder didn’t require much of us, but this ordinary encounter became a divine appointment we will always treasure. All we had to do was see the person God had placed in our path, look with compassion rather than judgment, and then act."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, let us pray every day for eyes to see the divine appointments God places before us! Let us put compassion into action and minister to the person in front of us. It’s what Jesus did."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "it’s what we do"
                    },
                    {
                        "type": "text",
                        "text": "."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the sacred name we take upon ourselves by covenant, even Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "“Find ways to serve and minister to others, including your family, your friends, and your community” (For the Strength of Youth: A Guide for Making Choices [2025], 15)."
            },
            {
                "noteNumber": 2,
                "text": "“Let your covenants guide your actions. When you have a choice to make, remember your covenant relationship with God. Be loyal to Him. Ask yourself: Does this align with my covenants? For example, do I love and minister to others, comfort people who need comfort, and stand as a witness of Christ—everywhere and always?” (For the Strength of Youth, 36)."
            },
            {
                "noteNumber": 3,
                "text": "See Moroni 4:3; Doctrine and Covenants 20:77; For the Strength of Youth, 35. I hope that each Aaronic Priesthood holder can see what an important service they are performing when they administer the sacrament, to help us receive that sacred power in our lives. It is such a simple ordinance, and yet the blessings of that covenant extend indefinitely, to multitudes of God’s children."
            },
            {
                "noteNumber": 4,
                "text": "“Love your neighbor. And who is your neighbor? Everyone! …"
            },
            {
                "noteNumber": 5,
                "text": "“[A] promise connected to baptism and the sacrament is the constant companionship of [the Lord’s] Spirit and the ministering of angels. You never have to face your challenges alone. God never abandons His covenant children—you can count on that” (For the Strength of Youth, 36–37)."
            },
            {
                "noteNumber": 6,
                "text": "“Heavenly Father does not expect you to do this work on your own. He is with you. When you humbly offer your time and heart, He will do amazing things through you. Jesus Christ is your strength!” (For the Strength of Youth, 16)."
            },
            {
                "noteNumber": 7,
                "text": "See Matthew 25:34–40; Mosiah 2:17. Often, during the sacrament, we think about how we did at keeping the commandments during the previous week. That kind of self-reflection can be good. But a covenant doesn’t just look back; it looks forward. It’s not so much about what we’ve done in the past; it’s more about what we’re willing to do in the future—in Christ’s name and with His help. (See Patrick Kearon, “Welcome to the Church of Joy,” Liahona, Nov. 2024, 37.)"
            },
            {
                "noteNumber": 8,
                "text": "“Act on spiritual impressions you receive. If you have a thought or impression to do something kind that will bless someone, do it! All good things come from God. Show your Heavenly Father that He can trust you to follow impressions from Him” (For the Strength of Youth, 12)."
            },
            {
                "noteNumber": 9,
                "text": "Luke 10:25. Interestingly, just before this interchange with the scheming lawyer, Jesus said to His disciples privately, “Blessed are the eyes which see the things that ye see: for I tell you, that many prophets and kings have desired to see those things which ye see, and have not seen them; and to hear those things which ye hear, and have not heard them” (Luke 10:23–24)."
            },
            {
                "noteNumber": 10,
                "text": "See Luke 10:30–35."
            },
            {
                "noteNumber": 11,
                "text": "See, for example, Mark 5:25–34; Luke 7:36–50; John 4:5–26; 5:1–17; 8:1–11; 3 Nephi 17:1–9. So many times, the opportunity to bless and lift someone came when Jesus was doing something else. And yet He never hesitated to stop what He was doing to minister with compassion to the person in front of Him."
            },
            {
                "noteNumber": 12,
                "text": "We often think of compassion as something we feel, but for Christ, it was something He did. Like faith, compassion gets life from our actions (see James 2:17). As President Russell M. Nelson said, “One of the easiest ways to identify a true follower of Jesus Christ is how compassionately that person treats other people” (“Peacemakers Needed,” Liahona, May 2023, 98)."
            }
        ]
    },
    {
        "title": "Spiritual Immunity",
        "author": "Christian C. Chigbundu",
        "authorRole": "Young Men General President",
        "kicker": "As covenant followers of Jesus Christ, we minister with compassion to whomever God places in our path.",
        "bodySections": [
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It’s What We Do, Isn’t It?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I’ll never forget a Saturday almost 20 years ago. I had just been called into a stake presidency and hadn’t yet been released as bishop. We had five young children, a business to run, and a full day of Church meetings, starting at 8:00 a.m. and concluding with a ward temple night. It was a busy time, and I wanted to give my all to the Lord, but I was never sure if I had enough to give."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "At a midday leadership meeting, the presiding authority invited questions. I gathered my courage and asked a question about an administrative matter that was troubling me. Instead of getting a helpful answer, I felt like my question was dismissed. I felt a little disheartened and unappreciated. I questioned why I was sacrificing so much if I was going to feel this way."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I left that meeting with no desire to attend the ward temple night. I called my wife, told her how discouraged I was, and said, “Let’s go to dinner instead of the temple.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Linsey wisely responded, “No, I think you need to be in the temple. We’ll talk after.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "So I went to the temple, but not with the best attitude."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As I entered the dressing room, grumbling to myself, I heard someone say, “How are you, brother?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It was Elder Dallin H. Oaks."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We had never met before, and I wasn’t about to tell a member of the Quorum of the Twelve Apostles how discouraged I felt. So I forced a smile and said, “Everything’s great!”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I changed into my temple clothes, and as I walked out, to my surprise, Elder Oaks was waiting for me."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He said, “Brother, tell me how you are really doing.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Something about the compassion in his voice helped me open up. Elder Oaks listened. He expressed sincere gratitude, said some encouraging words, and even answered my administrative question. Then he gave me a big hug, and in an instant I went from feeling like giving up to feeling like I could give my whole soul in service to the Lord."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Five years later, my wife and I were invited to meet with Elder Oaks in his office. You can imagine my excitement to reminisce about the experience we had shared. I asked him, “Do you remember the conversation we had in the temple?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“I don’t think so,” he said. “Have we met before?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I recounted the experience and reminded him how his act of compassion had lifted my spirits and changed my life."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Elder Oaks responded, “I’m sorry, brother. I don’t remember that.” Then, sensing my disappointment, he added, “But "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "it’s what we do. Isn’t it?"
                    },
                    {
                        "type": "text",
                        "text": "”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Those words have stayed with me ever since. That "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "is"
                    },
                    {
                        "type": "text",
                        "text": " what we do. As covenant followers of Jesus Christ, we minister with compassion to whomever God places in our path."
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " We do it because that’s what the Savior did. And we’ve made a covenant to follow Him."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A Covenant of Compassion"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Each Sabbath day, when you and I partake of the sacrament, we witness to our Father in Heaven our willingness to take upon ourselves the name of His Son, Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " That means we choose to see as He sees, feel as He feels, and do as He would do. His life should be reflected in ours. It means that when someone encounters us, they should experience something of Jesus Christ—His kindness, His patience, His hope, His love, His compassion."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our promise of willingness is met by the Lord’s promise that we can always have His Spirit with us."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " With that gift, we can minister as the Savior would, with His power and His loving kindness."
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "make"
                    },
                    {
                        "type": "text",
                        "text": " the covenant during sacred time with God every Sunday. A way we "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "keep"
                    },
                    {
                        "type": "text",
                        "text": " the covenant is by ministering to God’s children every day."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Often this happens when God places someone in our path and we have eyes to see them."
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " I call these “divine appointments.”"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Eyes to See"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When Jesus was asked, “What shall I do to inherit eternal life?”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " He answered with a story about a man who had eyes to see. In the story, a traveler lay wounded on the road to Jericho. Where others saw an inconvenience or an interruption, one man saw an opportunity to minister—a divine appointment. Seeing awakened compassion. Compassion moved him to act. And his actions changed a life forever."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "This pattern defined the Savior’s ministry. He turned ordinary encounters with people into extraordinary moments of healing, encouragement, and transformation."
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " To Jesus, these people were not interrupting His mission. They "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "were"
                    },
                    {
                        "type": "text",
                        "text": " His mission."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God has given us eyes to see. When we use them, we begin to recognize divine appointments all around us. What once looked like random encounters become invitations from the Lord to minister with compassion."
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "That’s what the Savior did. It’s what His prophet does. And it’s what we do, isn’t it?"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Minister to the One God Places in Your Path"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A few years ago, my wife and I were waiting to board a flight for a much-needed vacation. We arrived at the airport early, and I put my earbuds in and started reading a book, thankful for a few quiet moments to myself."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Before long, I glanced up and saw a young missionary sitting across from me. He looked frightened and anxious. His eyes were closed, he was rocking back and forth, and tears were streaming down his cheeks. Clutched in his hands were his boarding pass and a digital alarm clock."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "After briefly imagining the various reasons a missionary might look so anxious, I returned to my book. But the Spirit prompted me to "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "look again"
                    },
                    {
                        "type": "text",
                        "text": "."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When I did, I saw his tear-filled eyes looking at me, pleading for help."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Are you OK?” I asked."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In broken, timid English, he explained that he was on the way to his mission, it was going to be his first time on an airplane alone, and he was terrified. I learned he was a long way from his home country and he was holding the alarm clock to make sure he didn’t miss the plane."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Embarrassed by how slow I had been to help this elder, I explained that my wife and I would be on the same flight, and we would make sure he made it on the plane."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Linsey and I walked him to the gate and showed him the door he would go through. Soon it was our turn to board, so Linsey and I left him at the gate and took our seats."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the plane filled up, we anxiously watched for our missionary friend, but there was no sign of him. I worried we had made a big mistake by boarding without him."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Finally, there he was—like every missionary, the last one to board—still clutching his boarding pass and alarm clock, making his way toward the only empty seat, at the back of the plane."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It was the seat next to me."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We smiled at each other, amazed at how God had arranged even a small detail like that one. Then the elder, finally relaxing a bit, fell fast asleep."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When we landed, I woke him, and the panic returned to his face as he worried about what to do next. Where was he supposed to go? What if there was no one waiting for him?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Linsey and I helped him get off the plane and walked him, arm in arm, not to lose him again, all the way to the baggage claim area. Waiting for him there were his mission leaders. Knowing what a special moment this always is, we were excited to see this new missionary being greeted by his leaders for the very first time."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But to our surprise, our friend didn’t run to his mission leaders. Instead, he dropped his bags and gave Linsey and me a big hug of love and appreciation."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What we did for that elder didn’t require much of us, but this ordinary encounter became a divine appointment we will always treasure. All we had to do was see the person God had placed in our path, look with compassion rather than judgment, and then act."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, let us pray every day for eyes to see the divine appointments God places before us! Let us put compassion into action and minister to the person in front of us. It’s what Jesus did."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "it’s what we do"
                    },
                    {
                        "type": "text",
                        "text": "."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the sacred name we take upon ourselves by covenant, even Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "“Find ways to serve and minister to others, including your family, your friends, and your community” (For the Strength of Youth: A Guide for Making Choices [2025], 15)."
            },
            {
                "noteNumber": 2,
                "text": "“Let your covenants guide your actions. When you have a choice to make, remember your covenant relationship with God. Be loyal to Him. Ask yourself: Does this align with my covenants? For example, do I love and minister to others, comfort people who need comfort, and stand as a witness of Christ—everywhere and always?” (For the Strength of Youth, 36)."
            },
            {
                "noteNumber": 3,
                "text": "See Moroni 4:3; Doctrine and Covenants 20:77; For the Strength of Youth, 35. I hope that each Aaronic Priesthood holder can see what an important service they are performing when they administer the sacrament, to help us receive that sacred power in our lives. It is such a simple ordinance, and yet the blessings of that covenant extend indefinitely, to multitudes of God’s children."
            },
            {
                "noteNumber": 4,
                "text": "“Love your neighbor. And who is your neighbor? Everyone! …"
            },
            {
                "noteNumber": 5,
                "text": "“[A] promise connected to baptism and the sacrament is the constant companionship of [the Lord’s] Spirit and the ministering of angels. You never have to face your challenges alone. God never abandons His covenant children—you can count on that” (For the Strength of Youth, 36–37)."
            },
            {
                "noteNumber": 6,
                "text": "“Heavenly Father does not expect you to do this work on your own. He is with you. When you humbly offer your time and heart, He will do amazing things through you. Jesus Christ is your strength!” (For the Strength of Youth, 16)."
            },
            {
                "noteNumber": 7,
                "text": "See Matthew 25:34–40; Mosiah 2:17. Often, during the sacrament, we think about how we did at keeping the commandments during the previous week. That kind of self-reflection can be good. But a covenant doesn’t just look back; it looks forward. It’s not so much about what we’ve done in the past; it’s more about what we’re willing to do in the future—in Christ’s name and with His help. (See Patrick Kearon, “Welcome to the Church of Joy,” Liahona, Nov. 2024, 37.)"
            },
            {
                "noteNumber": 8,
                "text": "“Act on spiritual impressions you receive. If you have a thought or impression to do something kind that will bless someone, do it! All good things come from God. Show your Heavenly Father that He can trust you to follow impressions from Him” (For the Strength of Youth, 12)."
            },
            {
                "noteNumber": 9,
                "text": "Luke 10:25. Interestingly, just before this interchange with the scheming lawyer, Jesus said to His disciples privately, “Blessed are the eyes which see the things that ye see: for I tell you, that many prophets and kings have desired to see those things which ye see, and have not seen them; and to hear those things which ye hear, and have not heard them” (Luke 10:23–24)."
            },
            {
                "noteNumber": 10,
                "text": "See Luke 10:30–35."
            },
            {
                "noteNumber": 11,
                "text": "See, for example, Mark 5:25–34; Luke 7:36–50; John 4:5–26; 5:1–17; 8:1–11; 3 Nephi 17:1–9. So many times, the opportunity to bless and lift someone came when Jesus was doing something else. And yet He never hesitated to stop what He was doing to minister with compassion to the person in front of Him."
            },
            {
                "noteNumber": 12,
                "text": "We often think of compassion as something we feel, but for Christ, it was something He did. Like faith, compassion gets life from our actions (see James 2:17). As President Russell M. Nelson said, “One of the easiest ways to identify a true follower of Jesus Christ is how compassionately that person treats other people” (“Peacemakers Needed,” Liahona, May 2023, 98)."
            }
        ]
    },
    {
        "title": "Trusting the Lord Through Tithes and Offerings",
        "author": "Patricio M. Giuffra",
        "authorRole": "Young Men General President",
        "kicker": "As covenant followers of Jesus Christ, we minister with compassion to whomever God places in our path.",
        "bodySections": [
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It’s What We Do, Isn’t It?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I’ll never forget a Saturday almost 20 years ago. I had just been called into a stake presidency and hadn’t yet been released as bishop. We had five young children, a business to run, and a full day of Church meetings, starting at 8:00 a.m. and concluding with a ward temple night. It was a busy time, and I wanted to give my all to the Lord, but I was never sure if I had enough to give."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "At a midday leadership meeting, the presiding authority invited questions. I gathered my courage and asked a question about an administrative matter that was troubling me. Instead of getting a helpful answer, I felt like my question was dismissed. I felt a little disheartened and unappreciated. I questioned why I was sacrificing so much if I was going to feel this way."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I left that meeting with no desire to attend the ward temple night. I called my wife, told her how discouraged I was, and said, “Let’s go to dinner instead of the temple.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Linsey wisely responded, “No, I think you need to be in the temple. We’ll talk after.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "So I went to the temple, but not with the best attitude."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As I entered the dressing room, grumbling to myself, I heard someone say, “How are you, brother?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It was Elder Dallin H. Oaks."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We had never met before, and I wasn’t about to tell a member of the Quorum of the Twelve Apostles how discouraged I felt. So I forced a smile and said, “Everything’s great!”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I changed into my temple clothes, and as I walked out, to my surprise, Elder Oaks was waiting for me."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He said, “Brother, tell me how you are really doing.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Something about the compassion in his voice helped me open up. Elder Oaks listened. He expressed sincere gratitude, said some encouraging words, and even answered my administrative question. Then he gave me a big hug, and in an instant I went from feeling like giving up to feeling like I could give my whole soul in service to the Lord."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Five years later, my wife and I were invited to meet with Elder Oaks in his office. You can imagine my excitement to reminisce about the experience we had shared. I asked him, “Do you remember the conversation we had in the temple?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“I don’t think so,” he said. “Have we met before?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I recounted the experience and reminded him how his act of compassion had lifted my spirits and changed my life."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Elder Oaks responded, “I’m sorry, brother. I don’t remember that.” Then, sensing my disappointment, he added, “But "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "it’s what we do. Isn’t it?"
                    },
                    {
                        "type": "text",
                        "text": "”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Those words have stayed with me ever since. That "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "is"
                    },
                    {
                        "type": "text",
                        "text": " what we do. As covenant followers of Jesus Christ, we minister with compassion to whomever God places in our path."
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " We do it because that’s what the Savior did. And we’ve made a covenant to follow Him."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A Covenant of Compassion"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Each Sabbath day, when you and I partake of the sacrament, we witness to our Father in Heaven our willingness to take upon ourselves the name of His Son, Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " That means we choose to see as He sees, feel as He feels, and do as He would do. His life should be reflected in ours. It means that when someone encounters us, they should experience something of Jesus Christ—His kindness, His patience, His hope, His love, His compassion."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our promise of willingness is met by the Lord’s promise that we can always have His Spirit with us."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " With that gift, we can minister as the Savior would, with His power and His loving kindness."
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "make"
                    },
                    {
                        "type": "text",
                        "text": " the covenant during sacred time with God every Sunday. A way we "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "keep"
                    },
                    {
                        "type": "text",
                        "text": " the covenant is by ministering to God’s children every day."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Often this happens when God places someone in our path and we have eyes to see them."
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " I call these “divine appointments.”"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Eyes to See"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When Jesus was asked, “What shall I do to inherit eternal life?”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " He answered with a story about a man who had eyes to see. In the story, a traveler lay wounded on the road to Jericho. Where others saw an inconvenience or an interruption, one man saw an opportunity to minister—a divine appointment. Seeing awakened compassion. Compassion moved him to act. And his actions changed a life forever."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "This pattern defined the Savior’s ministry. He turned ordinary encounters with people into extraordinary moments of healing, encouragement, and transformation."
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " To Jesus, these people were not interrupting His mission. They "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "were"
                    },
                    {
                        "type": "text",
                        "text": " His mission."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God has given us eyes to see. When we use them, we begin to recognize divine appointments all around us. What once looked like random encounters become invitations from the Lord to minister with compassion."
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "That’s what the Savior did. It’s what His prophet does. And it’s what we do, isn’t it?"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Minister to the One God Places in Your Path"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A few years ago, my wife and I were waiting to board a flight for a much-needed vacation. We arrived at the airport early, and I put my earbuds in and started reading a book, thankful for a few quiet moments to myself."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Before long, I glanced up and saw a young missionary sitting across from me. He looked frightened and anxious. His eyes were closed, he was rocking back and forth, and tears were streaming down his cheeks. Clutched in his hands were his boarding pass and a digital alarm clock."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "After briefly imagining the various reasons a missionary might look so anxious, I returned to my book. But the Spirit prompted me to "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "look again"
                    },
                    {
                        "type": "text",
                        "text": "."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When I did, I saw his tear-filled eyes looking at me, pleading for help."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Are you OK?” I asked."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In broken, timid English, he explained that he was on the way to his mission, it was going to be his first time on an airplane alone, and he was terrified. I learned he was a long way from his home country and he was holding the alarm clock to make sure he didn’t miss the plane."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Embarrassed by how slow I had been to help this elder, I explained that my wife and I would be on the same flight, and we would make sure he made it on the plane."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Linsey and I walked him to the gate and showed him the door he would go through. Soon it was our turn to board, so Linsey and I left him at the gate and took our seats."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the plane filled up, we anxiously watched for our missionary friend, but there was no sign of him. I worried we had made a big mistake by boarding without him."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Finally, there he was—like every missionary, the last one to board—still clutching his boarding pass and alarm clock, making his way toward the only empty seat, at the back of the plane."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It was the seat next to me."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We smiled at each other, amazed at how God had arranged even a small detail like that one. Then the elder, finally relaxing a bit, fell fast asleep."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When we landed, I woke him, and the panic returned to his face as he worried about what to do next. Where was he supposed to go? What if there was no one waiting for him?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Linsey and I helped him get off the plane and walked him, arm in arm, not to lose him again, all the way to the baggage claim area. Waiting for him there were his mission leaders. Knowing what a special moment this always is, we were excited to see this new missionary being greeted by his leaders for the very first time."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But to our surprise, our friend didn’t run to his mission leaders. Instead, he dropped his bags and gave Linsey and me a big hug of love and appreciation."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What we did for that elder didn’t require much of us, but this ordinary encounter became a divine appointment we will always treasure. All we had to do was see the person God had placed in our path, look with compassion rather than judgment, and then act."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, let us pray every day for eyes to see the divine appointments God places before us! Let us put compassion into action and minister to the person in front of us. It’s what Jesus did."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "it’s what we do"
                    },
                    {
                        "type": "text",
                        "text": "."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the sacred name we take upon ourselves by covenant, even Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "“Find ways to serve and minister to others, including your family, your friends, and your community” (For the Strength of Youth: A Guide for Making Choices [2025], 15)."
            },
            {
                "noteNumber": 2,
                "text": "“Let your covenants guide your actions. When you have a choice to make, remember your covenant relationship with God. Be loyal to Him. Ask yourself: Does this align with my covenants? For example, do I love and minister to others, comfort people who need comfort, and stand as a witness of Christ—everywhere and always?” (For the Strength of Youth, 36)."
            },
            {
                "noteNumber": 3,
                "text": "See Moroni 4:3; Doctrine and Covenants 20:77; For the Strength of Youth, 35. I hope that each Aaronic Priesthood holder can see what an important service they are performing when they administer the sacrament, to help us receive that sacred power in our lives. It is such a simple ordinance, and yet the blessings of that covenant extend indefinitely, to multitudes of God’s children."
            },
            {
                "noteNumber": 4,
                "text": "“Love your neighbor. And who is your neighbor? Everyone! …"
            },
            {
                "noteNumber": 5,
                "text": "“[A] promise connected to baptism and the sacrament is the constant companionship of [the Lord’s] Spirit and the ministering of angels. You never have to face your challenges alone. God never abandons His covenant children—you can count on that” (For the Strength of Youth, 36–37)."
            },
            {
                "noteNumber": 6,
                "text": "“Heavenly Father does not expect you to do this work on your own. He is with you. When you humbly offer your time and heart, He will do amazing things through you. Jesus Christ is your strength!” (For the Strength of Youth, 16)."
            },
            {
                "noteNumber": 7,
                "text": "See Matthew 25:34–40; Mosiah 2:17. Often, during the sacrament, we think about how we did at keeping the commandments during the previous week. That kind of self-reflection can be good. But a covenant doesn’t just look back; it looks forward. It’s not so much about what we’ve done in the past; it’s more about what we’re willing to do in the future—in Christ’s name and with His help. (See Patrick Kearon, “Welcome to the Church of Joy,” Liahona, Nov. 2024, 37.)"
            },
            {
                "noteNumber": 8,
                "text": "“Act on spiritual impressions you receive. If you have a thought or impression to do something kind that will bless someone, do it! All good things come from God. Show your Heavenly Father that He can trust you to follow impressions from Him” (For the Strength of Youth, 12)."
            },
            {
                "noteNumber": 9,
                "text": "Luke 10:25. Interestingly, just before this interchange with the scheming lawyer, Jesus said to His disciples privately, “Blessed are the eyes which see the things that ye see: for I tell you, that many prophets and kings have desired to see those things which ye see, and have not seen them; and to hear those things which ye hear, and have not heard them” (Luke 10:23–24)."
            },
            {
                "noteNumber": 10,
                "text": "See Luke 10:30–35."
            },
            {
                "noteNumber": 11,
                "text": "See, for example, Mark 5:25–34; Luke 7:36–50; John 4:5–26; 5:1–17; 8:1–11; 3 Nephi 17:1–9. So many times, the opportunity to bless and lift someone came when Jesus was doing something else. And yet He never hesitated to stop what He was doing to minister with compassion to the person in front of Him."
            },
            {
                "noteNumber": 12,
                "text": "We often think of compassion as something we feel, but for Christ, it was something He did. Like faith, compassion gets life from our actions (see James 2:17). As President Russell M. Nelson said, “One of the easiest ways to identify a true follower of Jesus Christ is how compassionately that person treats other people” (“Peacemakers Needed,” Liahona, May 2023, 98)."
            }
        ]
    },
    {
        "title": "The Infinite Power of God in Our Covenants",
        "author": "Jeremiah J. Morgan",
        "authorRole": "Of the Seventy",
        "kicker": "Covenants with God stretch over all time and all space.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When I was a young teenager getting ready for school, my mother read to me from the Book of Mormon every day, out loud, whether I was listening or not."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "So, you might assume that I was raised in a family that belonged to The Church of Jesus Christ of Latter-day Saints. But I was not. My family were members of a different church that also believes in the Book of Mormon and the prophetic mission of Joseph Smith."
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " I am deeply grateful for that heritage, a heritage that began with my third-great-grandparents Francis and Mary Ann Case, who were baptized by Oliver Cowdery in 1831 and helped establish Nauvoo and build the house of the Lord."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "They did not travel west with the Saints; nevertheless, I was raised with a knowledge and testimony of the Prophet Joseph Smith. My mother actually gave me my middle name, Joseph, after the Prophet of the Restoration. And she gave me much more than that. She taught me about the restored gospel and the Book of Mormon."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "There are only two things I remember from that reading of the Book of Mormon by my mother: “and it came to pass” and “wars and rumors of wars.” That’s it."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But more than any words that I heard or did not hear, I knew the Book of Mormon was important to my mother. And I knew "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "she"
                    },
                    {
                        "type": "text",
                        "text": " knew it was true. Even as a single mother, she made the extraordinary effort to read the Book of Mormon to me every day until it was finished. As she did, she was fulfilling the admonition of the Lord, who said, “Remember the new covenant, even the Book of Mormon.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The lesson I learned is this: No time or effort is ever wasted in reading the Book of Mormon. Not for you, not for your children, not for your family, not for anyone."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Because of my mother’s extraordinary efforts, I knew the Book of Mormon was true and that Joseph Smith was a prophet of God. Even so, I was confused and uncertain as to where the true Church of Jesus Christ was. When I was 14, I began to question the church of my childhood. I knew members of The Church of Jesus Christ of Latter-day Saints; they were my friends."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "All of this led me to sincerely seek the truth. So, for two months I attended both my family’s congregation, and secretly—hiding between the accordion doors of the overflow—I attended a congregation of The Church of Jesus Christ of Latter-day Saints. I can’t fully express the gratitude I have for my upbringing and the knowledge I had received; even so, I came to know that this is the Lord’s Church."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It would be some time before I could join the Church, and though I would face questions and disappointment from my family, I had been given a gift—a testimony. And in the words of the Prophet Joseph Smith, “I knew it, and I knew that God knew it, and I could not deny it.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I was retelling this experience and pondering how a young boy such as me would have an interest in religion. There were many good influences in my life, to be sure, but that did not seem to explain it all. While I was musing out loud about this topic, my wife, Rebecca, said, “I know what it was! It was covenants.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "You see, while my ancestors were united with the Saints in Nauvoo, they had made covenants in the temple. Rebecca then read some of the beautiful and comforting prophetic teachings on this topic, which provide that because of “the eternal sealings of faithful parents and the divine promises made to them[,] … though some of the sheep may wander, the eye of the Shepherd is upon them, and sooner or later they will feel the tentacles of Divine Providence reaching out after them and drawing them back to the fold.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It was covenants; I felt it in that moment. And in these words, we begin to feel a sense of the awesome power of God in our covenants."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks has said that covenants “do not ‘take a day off.’”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Though the covenant faithfulness of parents and grandparents does not alter the agency of children or grandchildren, there is a discernible impact of those covenants on all our posterity."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It was "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "covenants"
                    },
                    {
                        "type": "text",
                        "text": " that had impacted me, not my covenants but the covenants of those who came before me. The power of God in those covenants reached out after me. As Elder Patrick Kearon has taught, “He employs every possible measure to bring [us] back.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It is exactly how the Lord revealed it to the Prophet Joseph Smith: “And he shall plant in the hearts of the children the promises made to the fathers, and the hearts of the children shall turn to their fathers.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We can see this promise being fulfilled in our day. In the Book of Mormon, the Lord made a covenant with Enos that the remnant of the people living at that time would someday receive his words and the fulness of the gospel of Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " Was there a time limit to that covenant? That covenant would take more than 2,000 years to be fulfilled. So, no, there is no limit to the power of God in our covenants."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Covenants with God are filled with incalculable power. They do not bless just the maker of the covenant but are generational in their impact. We are all the intended beneficiaries of countless covenants! Like the great binding power of gravity that stretches across the universe, covenants with God stretch over all time and all space."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "If you are wondering whether you or a loved one has wandered so far away that the love of God and His covenantal power cannot reach you—I say to you, you have not. As President Jeffrey R. Holland so beautifully said: “You have "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "not"
                    },
                    {
                        "type": "text",
                        "text": " traveled beyond the reach of divine love. It is not possible for you to sink lower than the infinite light of Christ’s Atonement shines.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Atonement of Jesus Christ is the fulfillment of the greatest promise God made—that Jesus Christ would be our Savior and Redeemer. The power and reach of that covenant is infinite and eternal."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Some may be crying out right now, with words like “O, God, where art Thou? My child is struggling.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " Take comfort; God hears you and will answer your prayers in His own time and in His own way. Keep your covenants, strive to be faithful, and “cheerfully do all things that lie in [your] power; and then may [you] stand still, with the utmost assurance, to see the salvation of God, and for his arm to be revealed.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I testify that the infinite power of God is in our covenants. Don’t ever give up. Your story, your family’s story, is not all written. God is the author and the finisher of it. I am a standing, breathing, believing demonstration of God’s love and the power of God in covenants. Blessed be the name of the Lord, of whom I testify in the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "I was raised in the Reorganized Church of Jesus Christ of Latter Day Saints, now called the Community of Christ. There is an important relationship of mutual respect and cooperation between the leaders and members of The Church of Jesus Christ of Latter-day Saints and the Community of Christ, a relationship that is built upon many common beliefs and shared interests."
            },
            {
                "noteNumber": 2,
                "text": "Doctrine and Covenants 84:57."
            },
            {
                "noteNumber": 3,
                "text": "Joseph Smith—History 1:25."
            },
            {
                "noteNumber": 4,
                "text": "Orson F. Whitney, in Conference Report, Apr. 1929, 110. Elder David A. Bednar taught: “The ‘tentacles of Divine Providence’ described by Elder Whitney may be considered a type of spiritual power, a heavenly pull or tug that entices a wandering child to return to the fold eventually. Such an influence cannot override the moral agency of a child but nonetheless can invite and beckon. Ultimately, a child must exercise his or her moral agency and respond in faith, repent with full purpose of heart, and act in accordance with the teachings of Christ” (“Faithful Parents and Wayward Children: Sustaining Hope While Overcoming Misunderstanding,” Liahona, Mar. 2014, 19)."
            },
            {
                "noteNumber": 5,
                "text": "Dallin H. Oaks, “Covenants and Responsibilities,” Liahona, May 2024, 96."
            },
            {
                "noteNumber": 6,
                "text": "“God is in relentless pursuit of you. He ‘wants all of His children to choose to return to Him,’ and He employs every possible measure to bring you back” (Patrick Kearon, “God’s Intent Is to Bring You Home,” Liahona, May 2024, 87)."
            },
            {
                "noteNumber": 7,
                "text": "Doctrine and Covenants 2:2."
            },
            {
                "noteNumber": 8,
                "text": "See Enos 1:15–18."
            },
            {
                "noteNumber": 9,
                "text": "Jeffrey R. Holland, “The Laborers in the Vineyard,” Liahona, May 2012, 33."
            },
            {
                "noteNumber": 10,
                "text": "See Doctrine and Covenants 121:1."
            },
            {
                "noteNumber": 11,
                "text": "Doctrine and Covenants 123:17."
            }
        ]
    },
    {
        "title": "I Am a Child of God",
        "author": "Hutch U. Fale",
        "authorRole": "Of the Seventy",
        "kicker": "Understanding our Father’s love and our true identity as His children is essential for our daily and eternal happiness.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I am a child of God and He loves me."
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " This statement is powerful and empowering. More importantly, it is true, not just for me but for each of us and all of us."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“All human beings—male and female—are created in the image of God. Each is a beloved spirit son or daughter of heavenly parents, and, as such, each has a divine nature and destiny. …"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“In the premortal realm, spirit sons and daughters knew and worshipped God as their Eternal Father and accepted His plan [for] His children.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I bear solemn witness of the reality of this “plain and precious” truth, powerful and simple."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " Understanding our Father’s love and our true identity as His children is essential for our daily and eternal happiness. It prevents deception and gives purpose to this mortal life."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The divine pattern of families teaches us of our Father’s love and our relationship to Him. In fact, “our relationship to God … [is] explained in terms of the family.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " Holy scriptures also teach us in terms of the family. The New Testament begins with a young family and a baby born in Bethlehem."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " The Book of Mormon begins with a family’s journey of faith,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " and the Old Testament teaches how the Creation was not complete until God had organized a family."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " It is often through families, despite all their imperfections, that our Father teaches us about His love."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Fale family baby photos.",
                "src": "https://www.churchofjesuschrist.org/imgs/azsi71hjdszjhy2ttig9fq9x7wtf32u4i2rwyz3f/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "While at a Church meeting last year, I received an impression to do what the teacher was doing. So, in a text, I asked my wife to find a baby picture of each of our children."
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " When I got home, we sat down and showed my kids their pictures. I told them that there are no words to fully express the love we felt when they were born, including the day each picture was taken. I then asked, “As of the date of this picture, what had you done to earn our love?” They lowered their eyes and said, “Nothing.” I asked them to look up and said, “You are right. You did nothing to earn our love. By that same token, there is nothing you can ever do that will unearn or remove that love from you. You did not earn it; you cannot lose it. It is yours forever.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I continued, “We need you to always remember that what we feel is but a small fraction of what your Heavenly Father feels for you. You are His child and He loves you. He loved you before you were born, He loves you today, and He will love you tomorrow. He wants you to prepare to be like Him. You must never forget this. We hope this understanding gives you courage to do your best, to trust Him, and to live up to your potential. We also hope it gives you the strength and the humility to come home when you need to, because no matter what has happened, you can always come home, just as you can always turn to your Father in Heaven.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    },
                    {
                        "type": "text",
                        "text": " There were tears and tender hearts as the Holy Spirit bore witness that this was true."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I referenced my children, but for you it might be a special love for siblings, parents, spouse, aunts, uncles, a grandparent you never met before. Or maybe all that is there is a "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "desire"
                    },
                    {
                        "type": "text",
                        "text": " for a family or for healthy family-like relationships."
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " Families evidence a divine and eternal pattern, connecting us to our Eternal Father and to His eternal family."
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " Even when a loving family is not part of our earthly experience, knowing that our Heavenly Father loves us can provide power, peace, and comfort, especially as we remember the eternal blessings that await all who make and keep sacred covenants—including all the blessings of an eternal family."
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As I bear witness of the eternal depth and nature of our Father’s love, I also offer this warning:"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    },
                    {
                        "type": "text",
                        "text": " Beware of the adversary’s deceitful lie that twists this precious truth. He tries to deceive God’s children into believing that because God loves us, we can be saved regardless of our pride, regardless of our rebellion, regardless of our sins, and regardless of our rejection of His Son and His Son’s servants."
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " Receiving Christ through priesthood ordinances and covenants, and then being faithful to those covenants, is the only way for us to fully understand His love and the only way to exaltation."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Knowing and understanding our Father’s love is important for many reasons. I will share just three."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, understanding our Father’s love helps us better understand Jesus Christ. We better understand why He did what He did and why He loves us the way He does."
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    },
                    {
                        "type": "text",
                        "text": " We recognize why He is anxiously engaged in trying to save and bless all of His Father’s children."
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " This understanding makes us eager to quickly and wholeheartedly join Him in His Father’s work."
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " As we are anxiously engaged in this work, we are able to become more like Him."
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Second, when we understand God’s love for us and for the rest of His children, we become immune to the divisive and misleading labels of our fallen world, both the labels that people try to put on us and the labels the world tries to put on others."
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    },
                    {
                        "type": "text",
                        "text": " We see ourselves and all of God’s children as beloved and divine. We become quick to repent, slow to judge, and ever hopeful that the best is yet before us. We are forever willing to love and to make sure that no one is ever sitting, standing, or walking alone."
                    },
                    {
                        "type": "note",
                        "noteNumber": "24"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Third, understanding our Father’s love protects us from the pernicious lie that it is too late for someone to change, too late for someone to turn to Christ, and too late to receive His redeeming grace."
                    },
                    {
                        "type": "note",
                        "noteNumber": "25"
                    },
                    {
                        "type": "text",
                        "text": " From the prodigal son to leaving the 99 sheep to find the one, our Father’s message, through His Son, has always been that there is still yet time if we turn to Christ today."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God’s love is real, and Jesus Christ is evidence of that love. To fulfill His divine responsibility to help His Father’s children,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "26"
                    },
                    {
                        "type": "text",
                        "text": " He conquered sin and the grave."
                    },
                    {
                        "type": "note",
                        "noteNumber": "27"
                    },
                    {
                        "type": "text",
                        "text": " While still a mortal, He taught us to pray to “our Father.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "28"
                    },
                    {
                        "type": "text",
                        "text": " Not just His Father, not someone else’s father, but our Father—a loving Heavenly Father who gives better gifts to His children than any other earthly father gives to his."
                    },
                    {
                        "type": "note",
                        "noteNumber": "29"
                    },
                    {
                        "type": "text",
                        "text": " Jesus Christ, through His premortal, mortal, and current ministry, points us to eternal life and personifies our Father’s deep, abiding, and eternal love."
                    },
                    {
                        "type": "note",
                        "noteNumber": "30"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Today Christ shows us our Father’s love through priesthood keys held by living prophets and apostles. These priesthood keys allow access to sacred ordinances and covenants that prepare us to return to our Father."
                    },
                    {
                        "type": "note",
                        "noteNumber": "31"
                    },
                    {
                        "type": "text",
                        "text": " Living prophets and apostles stand as witnesses that the resurrected Christ is evidence of the continuing and immeasurable love of our Eternal Father."
                    },
                    {
                        "type": "note",
                        "noteNumber": "32"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What I witness before you today first came by way of the Holy Spirit when I was a young boy riding from Nuku‘alofa to my home village of Mu‘a. I was reading a copy of the New Testament that referenced "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "John 3:16",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/john/3?lang=eng&id=p16#p16"
                    },
                    {
                        "type": "text",
                        "text": " in several different languages:"
                    },
                    {
                        "type": "note",
                        "noteNumber": "33"
                    },
                    {
                        "type": "text",
                        "text": " “For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.” I knew this was true then, and I know it is true now."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus is the Christ. He, His restored Church, and the divine pattern of families stand as witnesses of our Father’s love."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I, Hutch ‘Ungapapalangi Fale, am a child of God. He loves me and He loves you. May this truth never leave our minds or our hearts, and may it change us forever. In the sacred name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "“I know that God the Father lives. He loves us” (Henry B. Eyring, “Prayers for Peace,” Liahona, May 2026, 28)."
            },
            {
                "noteNumber": 2,
                "text": "“I bear witness of this truth: God and His Son, Jesus Christ, love all—and They love each” (Gérald Caussé, “Love All; Love Each,” Liahona, May 2026, 45)."
            },
            {
                "noteNumber": 3,
                "text": "“The Family: A Proclamation to the World,” Gospel Library."
            },
            {
                "noteNumber": 4,
                "text": "See 1 Nephi 13:26–29."
            },
            {
                "noteNumber": 5,
                "text": "See Russell M. Nelson, “Choices for Eternity” (worldwide devotional for young adults, May 15, 2022), Gospel Library."
            },
            {
                "noteNumber": 6,
                "text": "“Our relationship to God and the purpose of our mortal life are explained in terms of the family” (Dallin H. Oaks, “The Family-Centered Gospel of Jesus Christ,” Liahona, Nov. 2025, 121)."
            },
            {
                "noteNumber": 7,
                "text": "See Matthew 1–2."
            },
            {
                "noteNumber": 8,
                "text": "See 1 Nephi 1–18."
            },
            {
                "noteNumber": 9,
                "text": "See Genesis 1–2."
            },
            {
                "noteNumber": 10,
                "text": "See Dallin H. Oaks, “Divine Love in the Father’s Plan,” Liahona, May 2022, 102–3."
            },
            {
                "noteNumber": 11,
                "text": "At this time, we had three children at home and two serving missions. This discussion was with the three at home. Similar discussions with the two serving missions occurred at a later time and date via technology."
            },
            {
                "noteNumber": 12,
                "text": "See Clark G. Gilbert, “Come Home,” Liahona, May 2026, 15–17."
            },
            {
                "noteNumber": 13,
                "text": "“All who live or ever have lived who come unto Christ and live His gospel will feel joy beyond any earthly expression as we reunite, resurrected, with our Father in Heaven and Jesus Christ and with our parents, grandparents, siblings, aunts, uncles, cousins, and ancestors” (Ronald A. Rasband, “He Is Risen,” Liahona, May 2026, 75)."
            },
            {
                "noteNumber": 14,
                "text": "“We can truly say that the gospel plan was first taught to us in the council of an eternal family, it is implemented through our mortal families, and its intended destiny is to exalt the children of God in eternal families” (Dallin H. Oaks, “The Family-Centered Gospel of Jesus Christ,” 121)."
            },
            {
                "noteNumber": 15,
                "text": "“Every true disciple of Jesus Christ, if it is his or her desire, will be eternally sealed to a righteous companion of his or her choosing throughout eternity, whether in this life or the next” (Neil L. Andersen, “Eternal Marriage Is an Eternal Journey,” Liahona, May 2026, 103)."
            },
            {
                "noteNumber": 16,
                "text": "See 2 Nephi 28, especially verses 7–9 and 24–32."
            },
            {
                "noteNumber": 17,
                "text": "“Because God’s love is all-embracing, some speak of it as ‘unconditional,’ and in their minds they may project that thought to mean that God’s blessings are ‘unconditional’ and that salvation is ‘unconditional.’ They are not. Some are wont to say, ‘The Savior loves me just as I am,’ and that is certainly true. But He cannot take any of us into His kingdom just as we are, ‘for no unclean thing can dwell there, or dwell in his presence’ [Moses 6:57]. Our sins must first be resolved” (D. Todd Christofferson, “The Love of God,” Liahona, Nov. 2021, 16)."
            },
            {
                "noteNumber": 18,
                "text": "See D. Todd Christofferson, “The Love of God,” 16–18."
            },
            {
                "noteNumber": 19,
                "text": "See D. Todd Christofferson, “The Character of Christ,” Liahona, May 2026, 90–92."
            },
            {
                "noteNumber": 20,
                "text": "See Patrick Kearon, “About His Business,” Liahona, May 2026, 7–9."
            },
            {
                "noteNumber": 21,
                "text": "“I invite you to contemplate how you can:"
            },
            {
                "noteNumber": 22,
                "text": "“Living the message of the risen Christ testifies of our devotion and love for our Savior. It may well be that our consistent, courageous, and humble acts of service and love for God and His children will speak far more eloquently and powerfully than we ever could through words alone” (Dieter F. Uchtdorf, “Encounter at the Empty Tomb,” Liahona, May 2026, 59)."
            },
            {
                "noteNumber": 23,
                "text": "See Russell M. Nelson, “Choices for Eternity.”"
            },
            {
                "noteNumber": 24,
                "text": "See Gerrit W. Gong, “’Tis Eastertide: No One Walks Alone,” Liahona, May 2026, 111–13; Gerrit W. Gong, “No One Sits Alone,” Liahona, Nov. 2025, 40–42."
            },
            {
                "noteNumber": 25,
                "text": "“If you feel you have strayed … too far or too long and have no way to return, that simply is not true” (Russell M. Nelson, “The Power of Spiritual Momentum,” Liahona, May 2022, 99)."
            },
            {
                "noteNumber": 26,
                "text": "“Jesus lived and died to do His Father’s will” (Dale G. Renlund, “Because of Jesus Christ,” Liahona, May 2026, 76; see also Moses 1:39)."
            },
            {
                "noteNumber": 27,
                "text": "“It is my witness that His Atonement accomplished His Father’s plan of salvation and provides the way for everyone who has ever lived to be free of death unconditionally and free of sin on condition of repentance” (Quentin L. Cook, “Keys, Covenants, and Easter,” Liahona, May 2026, 105)."
            },
            {
                "noteNumber": 28,
                "text": "See Matthew 6:9–13."
            },
            {
                "noteNumber": 29,
                "text": "See Matthew 7:9–11."
            },
            {
                "noteNumber": 30,
                "text": "“The Redeemer ‘marked the path and led the way’ [“How Great the Wisdom and the Love,” Hymns, no. 195]. The power of His doctrine, covenants and ordinances, and example can bless us in every aspect of our lives."
            },
            {
                "noteNumber": 31,
                "text": "“Abiding in Christ … is choosing to listen to His voice and the voice of His servants and following what they teach, above all the enticing voices of the world” (Ulisses Soares, “Jesus Christ—the True Vine,” Liahona, May 2026, 53)."
            },
            {
                "noteNumber": 32,
                "text": "See “The Living Christ: The Testimony of the Apostles,” Gospel Library."
            },
            {
                "noteNumber": 33,
                "text": "Distributed by the Gideons International, it was a pocket-sized copy of the New Testament that included the book of Proverbs and the book of Psalms. At the beginning of the book were several pages referencing John 3:16 in various languages."
            }
        ]
    },
    {
        "title": "Jesus Lives to Lift",
        "author": "Patrick Kearon",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Your Saviour is your lift. He is your ever-rising air. There is no limit to how high you can climb with Him.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A few weeks ago, President Dieter F. Uchtdorf took me aside and said, “Patrick, your talks—they’re OK, but where is the aviation?” So here’s just a little aviation."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My Early Ambition"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I spent much of my childhood at boarding school in England looking up at aeroplanes crossing the sky, dreaming of flying home to my parents thousands of miles away in Arabia. I yearned to fly! I wanted to become a fighter pilot."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Basics of Learning to Glide"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Royal Air Force was recruiting pilots, and the fastest way for me to fly was learning to glide."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A glider is a lightweight aircraft with long, slender wings—and no engine—that stays aloft by riding within rising currents of air."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "A glider, a lightweight aircraft with no engine.",
                "src": "https://www.churchofjesuschrist.org/imgs/5q9ccph92ocyknhfd15y54q80tkb3w1s6jonabqx/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "So in my mid-teens I spent part of two summers at an airfield in Oxfordshire learning to fly a glider with the air force. First I learned to fly “straight and level,” then to make stable turns, next to take off towed by a tug plane, and finally to land safely back at the airfield. Only then was I ready to learn to stay in the air, climb, and eventually soar—all without an engine!"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Lift"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The crucial skill in gliding is finding rising air. You cannot see it, but you can see what it does. I was taught to look for cumulus clouds because they often mark where warm air is rising, and I learned to fly toward them."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But even more important than using visual cues to find rising air is to learn to feel it. While flying along, I would begin to feel that I was being lifted by an unseen force. This rising air is called “lift.” One wing would tip upward, and I would turn toward it, into the lift."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "A glider experiencing lift.",
                "src": "https://www.churchofjesuschrist.org/imgs/z8ir3fcjkjk5xdzjfnx6t0q272jsc96a46g791fx/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I was taught how to stay in lift, circling upward to gain altitude, and to often join other pilots who had found lift, climbing with them in the same invisible column of rising air."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "To be flying is fantastic, but climbing in lift and soaring with no engine is almost beyond description. For me it was beautiful—with only the whistle of the wind, the occasional creak from the glider, and the magnificent sensation of being drawn upward!"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Sink"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Just as there is rising air, there is also sinking air, called “sink.” It likewise cannot be seen, but it can be felt, and I quickly learned to avoid it. Gliding into sink can feel like falling, sometimes quickly. It shortens the distance you might fly and may threaten a safe landing. When I encountered sink, I learned to turn away decisively."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our Saviour Loves to Lift"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A decade after those gliding days, and not far into my journey of faith, I recognised that the principles of gliding I had learned in my teens have significant similarities with spiritual principles: We must avoid sink and find lift."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "At the heart of our faith is the glorious truth that we have an adoring Father in Heaven, whose Son, our Saviour, loves to lift!"
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": true,
                "alt": "The Savior lifting Peter in the waves.",
                "src": "https://www.churchofjesuschrist.org/imgs/j1eawfrlxa9gaub2zlq0dwhbtr1hzpinxf6d41uv/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "image",
                "noPrint": true,
                "alt": "The Savior lifting Jairus’s daughter.",
                "src": "https://www.churchofjesuschrist.org/imgs/4996892653dd3a56a25ba70c05f2729b26b664bc/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Just think of all the scriptural accounts that show our Redeemer lifting people from despair, out of their figurative “sink.” With His all-powerful hand, He lifted His beloved Peter from sinking in the waves;"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " He lifted the daughter of Jairus from the depths of death;"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " and after healing the boy plagued with an unclean spirit who “was as one dead; … Jesus took him by the hand, and lifted him up.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our Saviour constantly sought out the most desperate souls sinking into darkness and dread and lifted them up. And He wants to lift you!"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We Can Learn to Avoid Spiritual Sink and Find Spiritual Lift"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Through the amazing grace of Jesus Christ, we can avoid spiritual sink and find spiritual lift. Spiritual lift cannot be seen, but as we learn to discern and act upon the sensitive impressions of the Holy Spirit, we can feel it—as surely as I felt the rising air lift a wing beneath me."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Can you identify moments when you have felt undeniable spiritual lift? Where were you? How did it feel? Isn’t it magnificent to feel like you are being drawn upward, rising higher and higher toward your Heavenly Father and your intended eternal potential?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Can you likewise identify moments when you have felt spiritual sink? You likely remember how this felt in contrast. Just as with gliding, we turn away from it decisively."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "If You Aren’t Rising in Lift, You Are Descending"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In gliding, if you are not actively climbing in lift, you are descending. This is an uncomfortable fact. A descent can be so gradual that, unless you watch your altitude, you may not notice you are sinking."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Isn’t it the same in our lives? How easy it is to slowly slip from spiritual heights we have worked so hard to climb when we neglect the practices and behaviours that brought us there. We rarely intend to sink. We want lift—its joy and blessings—but we may not recognise the quiet cost of neglecting vital communion with our Father, Saviour, and the Holy Spirit."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Experiencing Lift"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When we first experience spiritual lift, it is wondrous. We may feel a soul-expanding lightness of being unlike anything we’ve ever experienced."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A compelling example of this in the Book of Mormon is when Ammon praises God for “[loosing his] brethren from the chains of hell.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " They had been “encircled about with everlasting darkness and destruction” and were then “brought … into … everlasting light, … encircled about with the matchless bounty of [God’s] love”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": "—redemption from the ultimate sink to the ultimate lift!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Ammon then tries to express his thanksgiving: “Behold, who can glory too much in the Lord? Yea, who can say too much of his great power, and of his mercy, and of his long-suffering towards the children of men? Behold, I say unto you, I cannot say the smallest part which I feel.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Ammon cannot begin to describe this profound transition from devastating sink to the most glorious lift. And I haven’t met anyone who can. The language of the Spirit of God is not a language of words."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Staying in Lift"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But lift and sink in the spiritual realm are nevertheless real. Pay close attention to the sweet, peaceful feelings that come when you choose spiritual lift, the rising forces that bring you into the Saviour’s loving upward pull."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Likewise, pay attention to the dim and dampening feelings that lead away from the Redeemer and His infinite love."
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And oh! the joy that comes when others experience lift, circling upward with us in the love and light of Jesus Christ! As children of the covenant, we are privileged with the responsibility of assisting the Lord in fulfilling His promises to all His children. Helping others turn from sink and into the lift of Jesus Christ is our glorious opportunity and brings joy beyond compare."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ Lives and Loves to Lift"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We can learn to live in spiritual lift. And when we sink, our gentle Saviour is there to lift us up as we turn to Him. Jesus Christ loves to lift!"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What does living in lift actually look like? A few simple things. Find a faithful guide and learn from them where lift is found. Actively tune in to the sweet feelings of the Holy Spirit and the things in "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "your"
                    },
                    {
                        "type": "text",
                        "text": " life that lead you there. Join those who are climbing. Do what they do."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " Watch closely for the subtle signs of sink in your own life, and turn away decisively. And when you find lift yourself, show someone else where and how to rise! Then soar in the joy of the Lord!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Saviour’s promise is “If ye do these things blessed are ye, for ye shall be lifted up at the last day.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "None of this is complicated; we simply need to keep turning toward the Saviour, into the source of lift, and keep choosing to rise into the light rather than drift imperceptibly into the shadow."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Remember: our Father sent His magnificent Son to be lifted up upon the cross"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    },
                    {
                        "type": "text",
                        "text": " that thereby He might draw all of us into His loving embrace."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Your Saviour is your lift. He is your ever-rising air. There is no limit to how high you can climb with Him. Jesus Christ lives to lift. In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "See Matthew 14:28–31."
            },
            {
                "noteNumber": 2,
                "text": "See Mark 5:35–42; Luke 8:49–55."
            },
            {
                "noteNumber": 3,
                "text": "See Mark 9:17–27."
            },
            {
                "noteNumber": 4,
                "text": "See Isaiah 40:31."
            },
            {
                "noteNumber": 5,
                "text": "Alma 26:14."
            },
            {
                "noteNumber": 6,
                "text": "Alma 26:15."
            },
            {
                "noteNumber": 7,
                "text": "Alma 26:16."
            },
            {
                "noteNumber": 8,
                "text": "Sometimes turning to the Saviour and into His lift may include seeking help from others, including medical and therapeutic assistance where needed."
            },
            {
                "noteNumber": 9,
                "text": "See Alma 36:3."
            },
            {
                "noteNumber": 10,
                "text": "“A third way to draw closer to our Savior is to associate with other believers. This includes discussions with trusted associates, local Church members, and other faithful friends."
            },
            {
                "noteNumber": 11,
                "text": "3 Nephi 27:22; see also John 6:40."
            },
            {
                "noteNumber": 12,
                "text": "See 3 Nephi 27:14–15."
            }
        ]
    },
    {
        "title": "The Ninety and Ten",
        "author": "Michael A. Dunn",
        "authorRole": "Of the Seventy",
        "kicker": "The Redeemer rescues not by shortening our course but by helping us lengthen our stride.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Among the myriad nearly incomprehensible blessings of our Savior Jesus Christ is His promise to carry our burdens."
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " But what does that look like in practical terms—especially when we are weighed down and seemingly without hope?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Years ago I came to better understand how the Savior ministers to us in even more personal, profound, and private ways than I ever thought possible."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "That realization came in 1998 when, in one of my very weak moments, my running partner Ted somehow talked me into entering a 100-mile (161-km) ultramarathon race. Clearly, I was not only out of my league but possibly out of my mind for saying yes. Sure, I’d run a few marathons before, but not four of them back-to-back."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Everything about it seemed impossible—except for one thing, and that was that Ted believed I could do it. That mattered because he had completed the race himself many times. He knew every twist of the trail and promised that if I would put in the training, he would be there to run with me through the second half of the race when fatigue, blisters, and especially self-doubt would become my worst enemies."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Race day arrived. Setting off in the predawn hours, I quickly realized this was bigger than me. But somehow I kept moving, even through the withering heat of the afternoon, one slogging step at a time. Then, with more than half the race ahead of me, and with daylight and my hopes fading, sure enough, Ted showed up."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Ted running with Elder Dunn.",
                "src": "https://www.churchofjesuschrist.org/imgs/ae4ue2ewki7tprplin1nlgadsz3hs75irio8spa3/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "With Ted’s patience and persistence and my unceasing silent prayers,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " we miraculously ran—make that trudged—to mile 90. Morning had barely dawned. Just 10 miles remained. But I was completely sapped—running on empty, as it were. Collapsing in the shade of a tree, I looked over at Ted and quietly said, “I give up.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But even as my resignation settled in, I got what you could arguably call the world’s first-ever “Ted Talk”!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In a gentle, reassuring tone, he reminded me of the months of preparation and those early-morning runs. He then kneeled down, looked me in the eye, and said something I will never forget: “I know you can do this, Mike, and I’m going to get you there.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Those simple, sincere words sparked something inside me. After a few more minutes, I got to my feet. At first I walked, then hobbled into, well, a pretty solid shuffle. And somehow, step by step, together we conquered those last 10 miles."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The impossible now looked possible. But about a hundred yards (91 m) from the finish line, Ted suddenly reached out and grabbed my hand."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Congrats, man,” he said. “You did it!” And with that, he began to peel off even as I begged him to finish beside me. But he simply smiled and added, “This is your race to finish.” Which I somehow managed to do."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A week or so later, a photograph from the race arrived in the mail. Miraculously, a friend captured that exact moment when Ted and I parted ways. But it also revealed a startling secret."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Ted leaving as Elder Dunn finishes the race.",
                "src": "https://www.churchofjesuschrist.org/imgs/6pzrj6m0dq8p7858lf6ea7kpq89tlut61046lggj/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As I looked closer, I saw what Ted really did for me that day."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Much to my astonishment, I saw that he wasn’t only carrying his water; he was carrying two of my water bottles and my pack—which he dutifully toted every step of those last 10 grueling miles."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Ted carrying Elder Dunn’s burdens.",
                "src": "https://www.churchofjesuschrist.org/imgs/n1mgdekrtg3vx4jimgui35p50cp6qruo9o9qabd8/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Somehow, there on the side of the trail, with me in deep despair and ready to quit, he quietly lightened my load—strapping my hydration pack to his own waist. Without fanfare or fuss, he simply shouldered my heaviest burden."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As I marveled at his benevolence, my thoughts immediately turned to an infinitely more amazing load-bearing Friend, our Savior Jesus Christ, who, as Isaiah unequivocally assured, has “borne our griefs, and carried our sorrows,”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " which I assumed meant the trails we travel would somehow become easier. But as I’ve come to learn through this race and the ups and downs of my life, He simultaneously lifts and uplifts, sometimes in unseen fashion, multiplying and magnifying even our most minuscule offerings. In other words, the Redeemer rescues not by shortening our course but by helping us lengthen our stride."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Anytime we turn to Christ, we turn a corner. By His grace we can trust and expect His constant care."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " And because God knows our prayers even before we ask Him,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " it’s reasonable to assume that blessings may often materialize in the selfsame moment we verbalize. His grace, which is a duality defined as a “divine means of help or strength,”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " can free us from the freight we would otherwise carry. And even when we don’t perceive Him at our side, He enlists the Teds—both of this world and sometimes even the Teds beyond—with His heartening promise of angels all around us to bear us up."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "One of the main reasons I trusted Ted during the race is the same reason we can implicitly trust Jesus in every aspect of our lives. Because He “marked the path and led the way,”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " there is no portion of our mortal sojourn He has not trod. He not only knows the road; He knows you and what you, as noble offspring of the divine, are capable of."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "To those at or nearing their “mile 90,” ferrying the unimaginable, or if you feel like I did, both depleted and defeated, I promise that as you expend even your last drops of energy to ask, His helping hand will ultimately give you that much-needed leg up."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " And even when the outcome or the timing is not what you plead for,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " take solace knowing that feeling broken does not mean you’ve been abandoned by God."
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Or, as President Dieter F. Uchtdorf taught: “Often the deep valleys of our present will be understood only by looking back on them from the mountains of our future experience. Often we can’t see the Lord’s hand in our lives until long after the trials have passed.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Through “him who is mighty to save,”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " you will find “strength beyond [your] own.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " In other words, don’t confuse the perceived invisibility of the Lord’s hand with the inveterate nature of the Lord’s heart. Peace will come even when hoped-for outcomes do not."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "All these years later, when I glance at that photo and ponder the metaphorical “last 10 miles” I still often face in this sojourn called life, I’m reminded that sometimes the God who makes the impossible possible"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    },
                    {
                        "type": "text",
                        "text": " can part seas and move mountains."
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " Other times He simply sends us a Ted. But most often He tops off our courage, capacity, and confidence by empowering us to “lay aside every weight” so we can “run with patience the race that is set before us.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    },
                    {
                        "type": "text",
                        "text": " In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "See Psalm 55:22."
            },
            {
                "noteNumber": 2,
                "text": "See 1 Thessalonians 5:17."
            },
            {
                "noteNumber": 3,
                "text": "Isaiah 53:4."
            },
            {
                "noteNumber": 4,
                "text": "See “I’ll Go Where You Want Me to Go,” Hymns, no. 270."
            },
            {
                "noteNumber": 5,
                "text": "See 3 Nephi 13:8."
            },
            {
                "noteNumber": 6,
                "text": "Bible Dictionary, “Grace.”"
            },
            {
                "noteNumber": 7,
                "text": "See Doctrine and Covenants 84:88."
            },
            {
                "noteNumber": 8,
                "text": "“How Great the Wisdom and the Love,” Hymns, no. 195."
            },
            {
                "noteNumber": 9,
                "text": "See Acts 17:29."
            },
            {
                "noteNumber": 10,
                "text": "See Psalm 50:15; Matthew 7:7; Hebrews 4:16; James 1:5."
            },
            {
                "noteNumber": 11,
                "text": "See Isaiah 55:8."
            },
            {
                "noteNumber": 12,
                "text": "See Deuteronomy 31:6."
            },
            {
                "noteNumber": 13,
                "text": "Dieter F. Uchtdorf, “Continue in Patience,” Liahona, May 2010, 58."
            },
            {
                "noteNumber": 14,
                "text": "2 Nephi 31:19; see also Zephaniah 3:17."
            },
            {
                "noteNumber": 15,
                "text": "“Lord, I Would Follow Thee,” Hymns, no. 220."
            },
            {
                "noteNumber": 16,
                "text": "See Matthew 19:26."
            },
            {
                "noteNumber": 17,
                "text": "See Isaiah 40:4."
            },
            {
                "noteNumber": 18,
                "text": "Hebrews 12:1."
            }
        ]
    },
    {
        "title": "Comfort from the Holy Ghost",
        "author": "Matthew J. Eyring",
        "authorRole": "Of the Seventy",
        "kicker": "The Savior’s peace is made manifest through the comforting power of the Holy Ghost.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Recently a friend of mine received a call from his wife informing him that their young married son had unexpectedly passed away the night before. He told me a single thought came to his mind at that moment: “I can’t fix this.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We are trained from a young age to solve problems, to be independent, to have perseverance and resilience. But our apparent self-reliance masks a deeper reality: All of us, regardless of experience, talent, or willpower, will sooner or later encounter burdens we cannot possibly carry ourselves."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "On another occasion we had the opportunity to go to dinner with a young couple who had recently lost one of their twins right before birth. It was the couple’s first pregnancy."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My wife and I went through a similar experience many years ago when she was preparing to deliver twins and one of them passed away before birth. As we sat at the table expressing empathy gained through our own suffering, we were grateful “to mourn with those that mourn … and comfort those that stand in need of comfort.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " We spoke together of parenthood, feelings of loss, and the path to healing and hope."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our mortal journey is designed to try our faith."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " Our challenges will be different depending on personal circumstance and even where we live in the world. I know that some of you worry about having enough food each day for you and your family. All of us face eventual limitations of physical or emotional health or the health of loved ones. We mourn when those close to us stray from the gospel path. We can be hurt by someone we love or hurt by the pain we have caused someone we love. We may feel misunderstood or deeply lonely. We might have a bad habit we’ve tried to overcome repeatedly without success."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It is important to not allow our challenges to negatively impact our faith. Our Savior, Jesus Christ, suffered for us. He knows exactly how we feel, especially in our darkest and most trying times."
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " As you humbly turn to the Lord and cast your burdens on Him,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " you have His promise: “Draw near unto me and I will draw near unto you.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " He will provide comfort; He will provide answers on His timetable as you turn to Him. Answers will come by various means as guided by the Spirit, sometimes in the form of tools, resources, and help from other people. The Lord has promised:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever;"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Even the Spirit of truth; … for he dwelleth with you, and shall be in you.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We have received repeated prophetic warnings that in coming days we will not survive spiritually without the constant influence of the Holy Ghost."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " One reason is that in a world of increasing temporal and spiritual turbulence, true sources of comfort will become more scarce. Without divine comfort, we risk losing hope; and without hope, we can lose our faith and stop trying. Our hearts can fail us."
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "There is hope in Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks said recently: “I wonder if we fully appreciate the enormous significance of this belief in a literal, universal resurrection. The conviction that death is not the conclusion of our identity changes the whole perspective of our mortal life. It affects how we look on the physical challenges of mortality. It gives us the strength and perspective to endure the mortal challenges faced by each of us and by those we love. It signifies that mortal deficiencies are only temporary! It also gives us the courage to face our own death or that of loved ones—even deaths we might call premature.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Do we truly appreciate all the Lord has done for us? He spares us from the only two things that can bring us permanent misery: separation from our bodies and separation from God because of sin. Even as He comforts us through temporary times of challenge and pain, He has prepared our rescue from permanent tragedy."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jacob, in the Book of Mormon, taught: “O how great the goodness of our God, who prepareth a way for our escape from the grasp of this awful monster; yea, that monster, death and hell, which I call the death of the body, and also the death of the spirit.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Someday we will more fully realize how generous and kind the Lord has been to each of us. We will better understand and appreciate the depth of the Savior’s sacrifice and the reality that He and the Father are truly givers of good gifts."
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Eye hath not seen, nor ear heard, neither have entered into the heart of man, the things which God hath prepared for them that love him.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    },
                    {
                        "type": "text",
                        "text": " We will realize that all the suffering that brought us closer to the Savior was preparing us for greater blessings."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "While in the hospital following the loss of the young couple’s twin baby, the new mother received a priesthood blessing. The husband, however, did not. After our dinner together, I had the opportunity to give this grieving father a priesthood blessing. Through the whisperings of the Spirit, he was promised peace “which passeth all understanding”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " during this difficult time and throughout his life. As he and his wife left that evening, their countenances shone with the light of the One in whom we must all put our complete trust."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Savior’s peace is made manifest through the comforting power of the Holy Ghost. That comfort will help us when we go through the inevitable hardships of life and times when we can’t fix things on our own. Living worthy of the constant companionship of the Holy Ghost should be one of our highest priorities."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I bear my witness that Jesus Christ lives. May we forever place our faith and hope in Him and believe and find comfort in His promise: “I will not leave you comfortless: I will come to you.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Mosiah 18:9."
            },
            {
                "noteNumber": 2,
                "text": "See Ether 12:6."
            },
            {
                "noteNumber": 3,
                "text": "See Alma 7:11–12."
            },
            {
                "noteNumber": 4,
                "text": "See Psalm 55:22; 1 Peter 5:7."
            },
            {
                "noteNumber": 5,
                "text": "Doctrine and Covenants 88:63."
            },
            {
                "noteNumber": 6,
                "text": "John 14:16–17."
            },
            {
                "noteNumber": 7,
                "text": "See Russell M. Nelson, “Revelation for the Church, Revelation for Our Lives,” Liahona, May 2018, 96; see also Dallin H. Oaks, “Coming Closer to Jesus Christ” (Brigham Young University devotional, Feb. 10, 2026), 2, speeches.byu.edu."
            },
            {
                "noteNumber": 8,
                "text": "See Doctrine and Covenants 45:26; 88:91."
            },
            {
                "noteNumber": 9,
                "text": "Dallin H. Oaks, “Alive in Christ,” Liahona, May 2026, 85."
            },
            {
                "noteNumber": 10,
                "text": "2 Nephi 9:10."
            },
            {
                "noteNumber": 11,
                "text": "See Matthew 7:11; James 1:17; Moroni 10:18."
            },
            {
                "noteNumber": 12,
                "text": "1 Corinthians 2:9."
            },
            {
                "noteNumber": 13,
                "text": "Philippians 4:7."
            },
            {
                "noteNumber": 14,
                "text": "John 14:18."
            }
        ]
    },
    {
        "title": "Love Like Jesus",
        "author": "Ronald A. Rasband",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My dear brothers and sisters, my message is for everyone whose heart aches for loved ones who have turned away from the Lord, stepped away from obedience to God’s laws, breached their covenants, and left behind a string of broken hearts, becoming, as the Bible says, “tossed to and fro.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the Apostle Paul described, you may feel “burdened excessively,” beyond your strength, weighed down as if being “pressed out of measure.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " If I asked for a show of hands of how many feel that way, hands would shoot up in this hall and around the world. Most of us have faced such anguish in our families or circle of friends. I know Sister Rasband and I have."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In our grief, we continuously ponder the "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "whys"
                    },
                    {
                        "type": "text",
                        "text": ", "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "hows,"
                    },
                    {
                        "type": "text",
                        "text": " and "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "what ifs"
                    },
                    {
                        "type": "text",
                        "text": ". We feel we have failed. We spend sleepless nights going over how we tried to draw our loved ones close to Jesus Christ and the Spirit. We preach, cajole, argue, demand, lecture, ignore, sit them down to watch general conference, and even send them links to the talks, like this one, but to no avail. If anything, these efforts can cause a greater rift."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By divine design, brothers and sisters, everyone must choose for themselves to follow Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Book of Mormon prophet Lehi"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " viewed in a dream “numberless concourses of people … pressing forward” to the tree of life, which is the love of Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " But “there arose a mist of darkness,” and some “wandered off,” setting up residence in the growing skyline of great and spacious buildings."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " The adversary’s deceit leads to confusion and misery. He can promise no life eternal, no life with God the Father,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " and no peace."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Not now. Not ever!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "How do we reset the clock while the adversary works overtime to destroy God’s plan of happiness?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Gratefully, the answer is in the Old Testament: “Be not afraid nor dismayed … ; for the battle is not yours, but God’s.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Listen carefully. I ask you to turn over to Jesus Christ your despair for those wayward souls. We cannot change their hearts, but He can; He is a God of miracles."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " We love our family members and friends profoundly, but they are foremost children of our Father in Heaven, who knows and loves them even more than we do. Our Father, the great Elohim, gave His Beloved Son the authority and power necessary to heal all His children. That is the good news of the gospel. By the power of Jesus Christ’s Atonement, there is always a way back!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By His Atonement from the Garden of Gethsemane to the cross on Golgotha, He paid for the sins and bore the disappointments that wrack their souls and yours."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the vernacular, Jesus Christ says to all who grieve, “I’ve got this!”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him. Love can positively influence those who have strayed. The first great commandment is to “love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " And the second great commandment is “Love thy neighbour as thyself.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " As the Primary song says, “As I have loved you, love one another.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is not stepping back or sanctioning others’ decisions and actions. Love is being interested in their lives, their successes, and their challenges. Love is being there with arms outstretched and a cheerful countenance. Love is lifting with faith and hope in our Lord and Savior. Love relies upon the calming influence of the Holy Ghost. The book of Proverbs teaches, “Trust in the Lord with all thine heart; and lean not unto thine own understanding … , and he [will] direct thy paths.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " The path is marked by love."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks has counseled: “Let us avoid what is harsh and hateful. Let us seek to be holy, like our Savior.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " That holiness comes when we are peacemakers, when we are charitable, patient, forgiving, and kind."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is expressed in prayer. In the Book of Mormon, Alma the Younger, talented and smooth-talking, “had rebelled against … God” and “had not kept his holy commandments.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " An angel, “with a voice of thunder,” declared, “The Lord hath heard the prayers of his people, and also the prayers of his servant, Alma, who is thy father; for he has prayed with much faith concerning thee that thou mightest be brought to [a] knowledge of the truth … that the prayers of his servants might be answered according to their faith.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    },
                    {
                        "type": "text",
                        "text": " His father, Alma,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " had prayed for weeks, months, years, maybe decades."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For three long days and nights, young Alma “was racked with eternal torment.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    },
                    {
                        "type": "text",
                        "text": " Somewhere deep within came his father’s teachings of the coming of Jesus Christ “to atone for the sins of the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " Alma cried in his heart, “O Jesus, thou Son of God, have mercy on me.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " The love of the Savior filled him “with joy.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    },
                    {
                        "type": "text",
                        "text": " He became a mighty prophet and a major figure in the Book of Mormon."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Take my yoke upon you, and learn of me,” our Savior says, “ … and ye shall find rest unto your souls.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, Jesus Christ pulls more than His weight. His Atonement is witness of His all-encompassing love for each one of us. Brutal as it was for Him, His Atonement was crucial for our eternal journey. Remember, “Greater love hath no man than this, that a man lay down his life for his friends.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "24"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He has already paid for the sins and errant choices of all of God’s children, including those for whom you and I grieve. He knows them. He knows their hearts; He loves them. He gave His very life to bring them home, all the way home."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Remember the prodigal son who chose to leave his safe moorings for “riotous living.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "25"
                    },
                    {
                        "type": "text",
                        "text": " He lost his fortune and his self-respect, and he returned home in a wretched state."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“When he was yet a great way off, his father saw him, and had compassion, and ran [to him].”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "26"
                    },
                    {
                        "type": "text",
                        "text": " “He was lost” and now was “found.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "27"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What brought him back? It was love. He knew where to find it. Love, brothers and sisters, is the answer to connecting with all of our loved ones. Our Father extends His protective arms to us and to those still distant from Him and His Son. He asks us to do the same. Jesus Christ beckons, “Come unto me, all ye that labour and are heavy laden, and I will give you rest.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "28"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I close with three suggestions to help us find rest:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, let go of any guilt. We fail only when we give up and stop trying, so never, never give up on those you love. Remember the example of Alma praying for his son."
                    },
                    {
                        "type": "note",
                        "noteNumber": "29"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Second, follow the admonition of President Thomas S. Monson: “Never let a problem to be solved become more important than a person to be loved.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "30"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Third, remember Jesus Christ is the answer. He is, always has been, and always will be. Seek Him through study of the scriptures and words of prophets, apostles, men and women leaders who are devoted to serving the Lord. And pray. Pray mightily to our Heavenly Father in the name of Jesus Christ. He will not leave us “comfortless.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "31"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I promise you, as an Apostle of the Lord Jesus Christ, that when the devil sends “forth his mighty winds” pulling loved ones off course, “his mighty storm … shall have no power … to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "32"
                    },
                    {
                        "type": "text",
                        "text": " If that rock is Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Trust Him. He’s got this! In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Ephesians 4:14."
            },
            {
                "noteNumber": 2,
                "text": "The phrase “pressed out of measure” in the King James Version of 2 Corinthians 1:8 is translated as “burdened excessively” in the New American Standard Bible."
            },
            {
                "noteNumber": 3,
                "text": "Lehi was the first prophet and patriarch in the Book of Mormon, who lived 600 years before Jesus Christ. He saw in vision the destruction of Jerusalem (see 1 Nephi 1:4) and the tree of life (see 1 Nephi 8). He led his family as instructed by the Lord into the wilderness (see 1 Nephi 2) and on their ocean journey to the promised land (see 1 Nephi 17–18). His sons Nephi and Jacob became great prophets with, for a time, righteous posterity called Nephites (see 2 Nephi 4–6). His sons Laman and Lemuel were rebellious and led away generations of their posterity, Lamanites, from the word of God (see 2 Nephi 5)."
            },
            {
                "noteNumber": 4,
                "text": "See 1 Nephi 8:21. Lehi saw in vision a beautiful tree with fruit, which was “most sweet, above all” (1 Nephi 8:11). The tree represents the love of Jesus Christ—the majesty of His ministry and atoning sacrifice."
            },
            {
                "noteNumber": 5,
                "text": "See 1 Nephi 8:23, 26."
            },
            {
                "noteNumber": 6,
                "text": "Eternal life means “to gain salvation, the blessings of eternal family, and exaltation, which is ‘the highest state of happiness and glory’ [Guide to the Scriptures, “Exaltation,” Gospel Library]. Through God’s love and grace, all His children will be resurrected after they die and enjoy immortality (see Moroni 7:41). Eternal life goes beyond immortality and includes inheriting the highest degree of the celestial kingdom, continuing in an eternal family, and being like God and living in His presence” (Topics and Questions, “Eternal Life,” Gospel Library)."
            },
            {
                "noteNumber": 7,
                "text": "Peace is freedom from contention and turmoil and brings inner calm. Jesus Christ promised: “Peace I leave with you … : not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid” (John 14:27)."
            },
            {
                "noteNumber": 8,
                "text": "2 Chronicles 20:15."
            },
            {
                "noteNumber": 9,
                "text": "Miracles are divine acts, manifestations and expressions of God’s limitless power, and an affirmation that He “is the same yesterday, today, and forever” (Moroni 10:19). As I taught in a previous general conference address, “Jesus Christ, who created the seas, can calm them; He who gave sight to the blind can lift our sights to heaven; He who cleansed the lepers can mend our infirmities; He who healed the impotent man can call for us to rise up with ‘Come, follow me’ [Luke 18:22]” (Ronald A. Rasband, “Behold! I Am a God of Miracles,” Liahona, May 2021, 109–10)."
            },
            {
                "noteNumber": 10,
                "text": "Matthew 22:37; see also Deuteronomy 6:5; Doctrine and Covenants 59:5."
            },
            {
                "noteNumber": 11,
                "text": "Matthew 22:39."
            },
            {
                "noteNumber": 12,
                "text": "“Love One Another,” Children’s Songbook, 136; see also John 15:12, 17."
            },
            {
                "noteNumber": 13,
                "text": "Proverbs 3:5–6."
            },
            {
                "noteNumber": 14,
                "text": "Dallin H. Oaks, “Alive in Christ,” Liahona, May 2026, 87."
            },
            {
                "noteNumber": 15,
                "text": "Alma 36:13."
            },
            {
                "noteNumber": 16,
                "text": "Mosiah 27:11, 14."
            },
            {
                "noteNumber": 17,
                "text": "Alma the Elder was among the wicked priests in the court of King Noah. He was converted to the gospel by Abinadi’s discourse about the Son of God and began to build a church faithful to the teachings of Jesus Christ. (See Mosiah 11–18.)"
            },
            {
                "noteNumber": 18,
                "text": "The scriptures do not tell us how often or how long Alma prayed for his son. But we read that Alma the Younger had stolen “away the hearts of the people; causing much dissension” (Mosiah 27:9) and had, according to his own words, “murdered many of [God’s] children, or rather led them away [into] destruction; yea, … so great had been my iniquities” (Alma 36:14). His actions suggest prolonged disobedience."
            },
            {
                "noteNumber": 19,
                "text": "Alma 36:12."
            },
            {
                "noteNumber": 20,
                "text": "Alma 36:17."
            },
            {
                "noteNumber": 21,
                "text": "Alma 36:18."
            },
            {
                "noteNumber": 22,
                "text": "Alma 36:20."
            },
            {
                "noteNumber": 23,
                "text": "Matthew 11:29."
            },
            {
                "noteNumber": 24,
                "text": "John 15:13."
            },
            {
                "noteNumber": 25,
                "text": "Luke 15:13."
            },
            {
                "noteNumber": 26,
                "text": "Luke 15:20."
            },
            {
                "noteNumber": 27,
                "text": "Luke 15:24."
            },
            {
                "noteNumber": 28,
                "text": "Matthew 11:28."
            },
            {
                "noteNumber": 29,
                "text": "See Mosiah 27:14."
            },
            {
                "noteNumber": 30,
                "text": "Thomas S. Monson, “Finding Joy in the Journey,” Liahona, Nov. 2008, 86."
            },
            {
                "noteNumber": 31,
                "text": "John 14:18."
            },
            {
                "noteNumber": 32,
                "text": "Helaman 5:12."
            }
        ]
    },
    {
        "title": "“Fear Not, I Am with Thee”",
        "author": "Henry B. Eyring",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My dear brothers and sisters, my message is for everyone whose heart aches for loved ones who have turned away from the Lord, stepped away from obedience to God’s laws, breached their covenants, and left behind a string of broken hearts, becoming, as the Bible says, “tossed to and fro.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the Apostle Paul described, you may feel “burdened excessively,” beyond your strength, weighed down as if being “pressed out of measure.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " If I asked for a show of hands of how many feel that way, hands would shoot up in this hall and around the world. Most of us have faced such anguish in our families or circle of friends. I know Sister Rasband and I have."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In our grief, we continuously ponder the "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "whys"
                    },
                    {
                        "type": "text",
                        "text": ", "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "hows,"
                    },
                    {
                        "type": "text",
                        "text": " and "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "what ifs"
                    },
                    {
                        "type": "text",
                        "text": ". We feel we have failed. We spend sleepless nights going over how we tried to draw our loved ones close to Jesus Christ and the Spirit. We preach, cajole, argue, demand, lecture, ignore, sit them down to watch general conference, and even send them links to the talks, like this one, but to no avail. If anything, these efforts can cause a greater rift."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By divine design, brothers and sisters, everyone must choose for themselves to follow Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Book of Mormon prophet Lehi"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " viewed in a dream “numberless concourses of people … pressing forward” to the tree of life, which is the love of Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " But “there arose a mist of darkness,” and some “wandered off,” setting up residence in the growing skyline of great and spacious buildings."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " The adversary’s deceit leads to confusion and misery. He can promise no life eternal, no life with God the Father,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " and no peace."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Not now. Not ever!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "How do we reset the clock while the adversary works overtime to destroy God’s plan of happiness?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Gratefully, the answer is in the Old Testament: “Be not afraid nor dismayed … ; for the battle is not yours, but God’s.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Listen carefully. I ask you to turn over to Jesus Christ your despair for those wayward souls. We cannot change their hearts, but He can; He is a God of miracles."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " We love our family members and friends profoundly, but they are foremost children of our Father in Heaven, who knows and loves them even more than we do. Our Father, the great Elohim, gave His Beloved Son the authority and power necessary to heal all His children. That is the good news of the gospel. By the power of Jesus Christ’s Atonement, there is always a way back!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By His Atonement from the Garden of Gethsemane to the cross on Golgotha, He paid for the sins and bore the disappointments that wrack their souls and yours."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the vernacular, Jesus Christ says to all who grieve, “I’ve got this!”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him. Love can positively influence those who have strayed. The first great commandment is to “love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " And the second great commandment is “Love thy neighbour as thyself.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " As the Primary song says, “As I have loved you, love one another.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is not stepping back or sanctioning others’ decisions and actions. Love is being interested in their lives, their successes, and their challenges. Love is being there with arms outstretched and a cheerful countenance. Love is lifting with faith and hope in our Lord and Savior. Love relies upon the calming influence of the Holy Ghost. The book of Proverbs teaches, “Trust in the Lord with all thine heart; and lean not unto thine own understanding … , and he [will] direct thy paths.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " The path is marked by love."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks has counseled: “Let us avoid what is harsh and hateful. Let us seek to be holy, like our Savior.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " That holiness comes when we are peacemakers, when we are charitable, patient, forgiving, and kind."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is expressed in prayer. In the Book of Mormon, Alma the Younger, talented and smooth-talking, “had rebelled against … God” and “had not kept his holy commandments.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " An angel, “with a voice of thunder,” declared, “The Lord hath heard the prayers of his people, and also the prayers of his servant, Alma, who is thy father; for he has prayed with much faith concerning thee that thou mightest be brought to [a] knowledge of the truth … that the prayers of his servants might be answered according to their faith.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    },
                    {
                        "type": "text",
                        "text": " His father, Alma,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " had prayed for weeks, months, years, maybe decades."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For three long days and nights, young Alma “was racked with eternal torment.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    },
                    {
                        "type": "text",
                        "text": " Somewhere deep within came his father’s teachings of the coming of Jesus Christ “to atone for the sins of the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " Alma cried in his heart, “O Jesus, thou Son of God, have mercy on me.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " The love of the Savior filled him “with joy.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    },
                    {
                        "type": "text",
                        "text": " He became a mighty prophet and a major figure in the Book of Mormon."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Take my yoke upon you, and learn of me,” our Savior says, “ … and ye shall find rest unto your souls.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, Jesus Christ pulls more than His weight. His Atonement is witness of His all-encompassing love for each one of us. Brutal as it was for Him, His Atonement was crucial for our eternal journey. Remember, “Greater love hath no man than this, that a man lay down his life for his friends.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "24"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He has already paid for the sins and errant choices of all of God’s children, including those for whom you and I grieve. He knows them. He knows their hearts; He loves them. He gave His very life to bring them home, all the way home."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Remember the prodigal son who chose to leave his safe moorings for “riotous living.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "25"
                    },
                    {
                        "type": "text",
                        "text": " He lost his fortune and his self-respect, and he returned home in a wretched state."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“When he was yet a great way off, his father saw him, and had compassion, and ran [to him].”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "26"
                    },
                    {
                        "type": "text",
                        "text": " “He was lost” and now was “found.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "27"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What brought him back? It was love. He knew where to find it. Love, brothers and sisters, is the answer to connecting with all of our loved ones. Our Father extends His protective arms to us and to those still distant from Him and His Son. He asks us to do the same. Jesus Christ beckons, “Come unto me, all ye that labour and are heavy laden, and I will give you rest.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "28"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I close with three suggestions to help us find rest:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, let go of any guilt. We fail only when we give up and stop trying, so never, never give up on those you love. Remember the example of Alma praying for his son."
                    },
                    {
                        "type": "note",
                        "noteNumber": "29"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Second, follow the admonition of President Thomas S. Monson: “Never let a problem to be solved become more important than a person to be loved.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "30"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Third, remember Jesus Christ is the answer. He is, always has been, and always will be. Seek Him through study of the scriptures and words of prophets, apostles, men and women leaders who are devoted to serving the Lord. And pray. Pray mightily to our Heavenly Father in the name of Jesus Christ. He will not leave us “comfortless.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "31"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I promise you, as an Apostle of the Lord Jesus Christ, that when the devil sends “forth his mighty winds” pulling loved ones off course, “his mighty storm … shall have no power … to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "32"
                    },
                    {
                        "type": "text",
                        "text": " If that rock is Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Trust Him. He’s got this! In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Ephesians 4:14."
            },
            {
                "noteNumber": 2,
                "text": "The phrase “pressed out of measure” in the King James Version of 2 Corinthians 1:8 is translated as “burdened excessively” in the New American Standard Bible."
            },
            {
                "noteNumber": 3,
                "text": "Lehi was the first prophet and patriarch in the Book of Mormon, who lived 600 years before Jesus Christ. He saw in vision the destruction of Jerusalem (see 1 Nephi 1:4) and the tree of life (see 1 Nephi 8). He led his family as instructed by the Lord into the wilderness (see 1 Nephi 2) and on their ocean journey to the promised land (see 1 Nephi 17–18). His sons Nephi and Jacob became great prophets with, for a time, righteous posterity called Nephites (see 2 Nephi 4–6). His sons Laman and Lemuel were rebellious and led away generations of their posterity, Lamanites, from the word of God (see 2 Nephi 5)."
            },
            {
                "noteNumber": 4,
                "text": "See 1 Nephi 8:21. Lehi saw in vision a beautiful tree with fruit, which was “most sweet, above all” (1 Nephi 8:11). The tree represents the love of Jesus Christ—the majesty of His ministry and atoning sacrifice."
            },
            {
                "noteNumber": 5,
                "text": "See 1 Nephi 8:23, 26."
            },
            {
                "noteNumber": 6,
                "text": "Eternal life means “to gain salvation, the blessings of eternal family, and exaltation, which is ‘the highest state of happiness and glory’ [Guide to the Scriptures, “Exaltation,” Gospel Library]. Through God’s love and grace, all His children will be resurrected after they die and enjoy immortality (see Moroni 7:41). Eternal life goes beyond immortality and includes inheriting the highest degree of the celestial kingdom, continuing in an eternal family, and being like God and living in His presence” (Topics and Questions, “Eternal Life,” Gospel Library)."
            },
            {
                "noteNumber": 7,
                "text": "Peace is freedom from contention and turmoil and brings inner calm. Jesus Christ promised: “Peace I leave with you … : not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid” (John 14:27)."
            },
            {
                "noteNumber": 8,
                "text": "2 Chronicles 20:15."
            },
            {
                "noteNumber": 9,
                "text": "Miracles are divine acts, manifestations and expressions of God’s limitless power, and an affirmation that He “is the same yesterday, today, and forever” (Moroni 10:19). As I taught in a previous general conference address, “Jesus Christ, who created the seas, can calm them; He who gave sight to the blind can lift our sights to heaven; He who cleansed the lepers can mend our infirmities; He who healed the impotent man can call for us to rise up with ‘Come, follow me’ [Luke 18:22]” (Ronald A. Rasband, “Behold! I Am a God of Miracles,” Liahona, May 2021, 109–10)."
            },
            {
                "noteNumber": 10,
                "text": "Matthew 22:37; see also Deuteronomy 6:5; Doctrine and Covenants 59:5."
            },
            {
                "noteNumber": 11,
                "text": "Matthew 22:39."
            },
            {
                "noteNumber": 12,
                "text": "“Love One Another,” Children’s Songbook, 136; see also John 15:12, 17."
            },
            {
                "noteNumber": 13,
                "text": "Proverbs 3:5–6."
            },
            {
                "noteNumber": 14,
                "text": "Dallin H. Oaks, “Alive in Christ,” Liahona, May 2026, 87."
            },
            {
                "noteNumber": 15,
                "text": "Alma 36:13."
            },
            {
                "noteNumber": 16,
                "text": "Mosiah 27:11, 14."
            },
            {
                "noteNumber": 17,
                "text": "Alma the Elder was among the wicked priests in the court of King Noah. He was converted to the gospel by Abinadi’s discourse about the Son of God and began to build a church faithful to the teachings of Jesus Christ. (See Mosiah 11–18.)"
            },
            {
                "noteNumber": 18,
                "text": "The scriptures do not tell us how often or how long Alma prayed for his son. But we read that Alma the Younger had stolen “away the hearts of the people; causing much dissension” (Mosiah 27:9) and had, according to his own words, “murdered many of [God’s] children, or rather led them away [into] destruction; yea, … so great had been my iniquities” (Alma 36:14). His actions suggest prolonged disobedience."
            },
            {
                "noteNumber": 19,
                "text": "Alma 36:12."
            },
            {
                "noteNumber": 20,
                "text": "Alma 36:17."
            },
            {
                "noteNumber": 21,
                "text": "Alma 36:18."
            },
            {
                "noteNumber": 22,
                "text": "Alma 36:20."
            },
            {
                "noteNumber": 23,
                "text": "Matthew 11:29."
            },
            {
                "noteNumber": 24,
                "text": "John 15:13."
            },
            {
                "noteNumber": 25,
                "text": "Luke 15:13."
            },
            {
                "noteNumber": 26,
                "text": "Luke 15:20."
            },
            {
                "noteNumber": 27,
                "text": "Luke 15:24."
            },
            {
                "noteNumber": 28,
                "text": "Matthew 11:28."
            },
            {
                "noteNumber": 29,
                "text": "See Mosiah 27:14."
            },
            {
                "noteNumber": 30,
                "text": "Thomas S. Monson, “Finding Joy in the Journey,” Liahona, Nov. 2008, 86."
            },
            {
                "noteNumber": 31,
                "text": "John 14:18."
            },
            {
                "noteNumber": 32,
                "text": "Helaman 5:12."
            }
        ]
    },
    {
        "title": "A Child of God",
        "author": "Rosemary K. Chibota",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My dear brothers and sisters, my message is for everyone whose heart aches for loved ones who have turned away from the Lord, stepped away from obedience to God’s laws, breached their covenants, and left behind a string of broken hearts, becoming, as the Bible says, “tossed to and fro.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the Apostle Paul described, you may feel “burdened excessively,” beyond your strength, weighed down as if being “pressed out of measure.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " If I asked for a show of hands of how many feel that way, hands would shoot up in this hall and around the world. Most of us have faced such anguish in our families or circle of friends. I know Sister Rasband and I have."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In our grief, we continuously ponder the "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "whys"
                    },
                    {
                        "type": "text",
                        "text": ", "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "hows,"
                    },
                    {
                        "type": "text",
                        "text": " and "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "what ifs"
                    },
                    {
                        "type": "text",
                        "text": ". We feel we have failed. We spend sleepless nights going over how we tried to draw our loved ones close to Jesus Christ and the Spirit. We preach, cajole, argue, demand, lecture, ignore, sit them down to watch general conference, and even send them links to the talks, like this one, but to no avail. If anything, these efforts can cause a greater rift."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By divine design, brothers and sisters, everyone must choose for themselves to follow Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Book of Mormon prophet Lehi"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " viewed in a dream “numberless concourses of people … pressing forward” to the tree of life, which is the love of Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " But “there arose a mist of darkness,” and some “wandered off,” setting up residence in the growing skyline of great and spacious buildings."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " The adversary’s deceit leads to confusion and misery. He can promise no life eternal, no life with God the Father,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " and no peace."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Not now. Not ever!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "How do we reset the clock while the adversary works overtime to destroy God’s plan of happiness?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Gratefully, the answer is in the Old Testament: “Be not afraid nor dismayed … ; for the battle is not yours, but God’s.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Listen carefully. I ask you to turn over to Jesus Christ your despair for those wayward souls. We cannot change their hearts, but He can; He is a God of miracles."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " We love our family members and friends profoundly, but they are foremost children of our Father in Heaven, who knows and loves them even more than we do. Our Father, the great Elohim, gave His Beloved Son the authority and power necessary to heal all His children. That is the good news of the gospel. By the power of Jesus Christ’s Atonement, there is always a way back!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By His Atonement from the Garden of Gethsemane to the cross on Golgotha, He paid for the sins and bore the disappointments that wrack their souls and yours."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the vernacular, Jesus Christ says to all who grieve, “I’ve got this!”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him. Love can positively influence those who have strayed. The first great commandment is to “love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " And the second great commandment is “Love thy neighbour as thyself.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " As the Primary song says, “As I have loved you, love one another.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is not stepping back or sanctioning others’ decisions and actions. Love is being interested in their lives, their successes, and their challenges. Love is being there with arms outstretched and a cheerful countenance. Love is lifting with faith and hope in our Lord and Savior. Love relies upon the calming influence of the Holy Ghost. The book of Proverbs teaches, “Trust in the Lord with all thine heart; and lean not unto thine own understanding … , and he [will] direct thy paths.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " The path is marked by love."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks has counseled: “Let us avoid what is harsh and hateful. Let us seek to be holy, like our Savior.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " That holiness comes when we are peacemakers, when we are charitable, patient, forgiving, and kind."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is expressed in prayer. In the Book of Mormon, Alma the Younger, talented and smooth-talking, “had rebelled against … God” and “had not kept his holy commandments.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " An angel, “with a voice of thunder,” declared, “The Lord hath heard the prayers of his people, and also the prayers of his servant, Alma, who is thy father; for he has prayed with much faith concerning thee that thou mightest be brought to [a] knowledge of the truth … that the prayers of his servants might be answered according to their faith.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    },
                    {
                        "type": "text",
                        "text": " His father, Alma,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " had prayed for weeks, months, years, maybe decades."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For three long days and nights, young Alma “was racked with eternal torment.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    },
                    {
                        "type": "text",
                        "text": " Somewhere deep within came his father’s teachings of the coming of Jesus Christ “to atone for the sins of the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " Alma cried in his heart, “O Jesus, thou Son of God, have mercy on me.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " The love of the Savior filled him “with joy.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    },
                    {
                        "type": "text",
                        "text": " He became a mighty prophet and a major figure in the Book of Mormon."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Take my yoke upon you, and learn of me,” our Savior says, “ … and ye shall find rest unto your souls.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, Jesus Christ pulls more than His weight. His Atonement is witness of His all-encompassing love for each one of us. Brutal as it was for Him, His Atonement was crucial for our eternal journey. Remember, “Greater love hath no man than this, that a man lay down his life for his friends.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "24"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He has already paid for the sins and errant choices of all of God’s children, including those for whom you and I grieve. He knows them. He knows their hearts; He loves them. He gave His very life to bring them home, all the way home."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Remember the prodigal son who chose to leave his safe moorings for “riotous living.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "25"
                    },
                    {
                        "type": "text",
                        "text": " He lost his fortune and his self-respect, and he returned home in a wretched state."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“When he was yet a great way off, his father saw him, and had compassion, and ran [to him].”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "26"
                    },
                    {
                        "type": "text",
                        "text": " “He was lost” and now was “found.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "27"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What brought him back? It was love. He knew where to find it. Love, brothers and sisters, is the answer to connecting with all of our loved ones. Our Father extends His protective arms to us and to those still distant from Him and His Son. He asks us to do the same. Jesus Christ beckons, “Come unto me, all ye that labour and are heavy laden, and I will give you rest.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "28"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I close with three suggestions to help us find rest:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, let go of any guilt. We fail only when we give up and stop trying, so never, never give up on those you love. Remember the example of Alma praying for his son."
                    },
                    {
                        "type": "note",
                        "noteNumber": "29"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Second, follow the admonition of President Thomas S. Monson: “Never let a problem to be solved become more important than a person to be loved.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "30"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Third, remember Jesus Christ is the answer. He is, always has been, and always will be. Seek Him through study of the scriptures and words of prophets, apostles, men and women leaders who are devoted to serving the Lord. And pray. Pray mightily to our Heavenly Father in the name of Jesus Christ. He will not leave us “comfortless.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "31"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I promise you, as an Apostle of the Lord Jesus Christ, that when the devil sends “forth his mighty winds” pulling loved ones off course, “his mighty storm … shall have no power … to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "32"
                    },
                    {
                        "type": "text",
                        "text": " If that rock is Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Trust Him. He’s got this! In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Ephesians 4:14."
            },
            {
                "noteNumber": 2,
                "text": "The phrase “pressed out of measure” in the King James Version of 2 Corinthians 1:8 is translated as “burdened excessively” in the New American Standard Bible."
            },
            {
                "noteNumber": 3,
                "text": "Lehi was the first prophet and patriarch in the Book of Mormon, who lived 600 years before Jesus Christ. He saw in vision the destruction of Jerusalem (see 1 Nephi 1:4) and the tree of life (see 1 Nephi 8). He led his family as instructed by the Lord into the wilderness (see 1 Nephi 2) and on their ocean journey to the promised land (see 1 Nephi 17–18). His sons Nephi and Jacob became great prophets with, for a time, righteous posterity called Nephites (see 2 Nephi 4–6). His sons Laman and Lemuel were rebellious and led away generations of their posterity, Lamanites, from the word of God (see 2 Nephi 5)."
            },
            {
                "noteNumber": 4,
                "text": "See 1 Nephi 8:21. Lehi saw in vision a beautiful tree with fruit, which was “most sweet, above all” (1 Nephi 8:11). The tree represents the love of Jesus Christ—the majesty of His ministry and atoning sacrifice."
            },
            {
                "noteNumber": 5,
                "text": "See 1 Nephi 8:23, 26."
            },
            {
                "noteNumber": 6,
                "text": "Eternal life means “to gain salvation, the blessings of eternal family, and exaltation, which is ‘the highest state of happiness and glory’ [Guide to the Scriptures, “Exaltation,” Gospel Library]. Through God’s love and grace, all His children will be resurrected after they die and enjoy immortality (see Moroni 7:41). Eternal life goes beyond immortality and includes inheriting the highest degree of the celestial kingdom, continuing in an eternal family, and being like God and living in His presence” (Topics and Questions, “Eternal Life,” Gospel Library)."
            },
            {
                "noteNumber": 7,
                "text": "Peace is freedom from contention and turmoil and brings inner calm. Jesus Christ promised: “Peace I leave with you … : not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid” (John 14:27)."
            },
            {
                "noteNumber": 8,
                "text": "2 Chronicles 20:15."
            },
            {
                "noteNumber": 9,
                "text": "Miracles are divine acts, manifestations and expressions of God’s limitless power, and an affirmation that He “is the same yesterday, today, and forever” (Moroni 10:19). As I taught in a previous general conference address, “Jesus Christ, who created the seas, can calm them; He who gave sight to the blind can lift our sights to heaven; He who cleansed the lepers can mend our infirmities; He who healed the impotent man can call for us to rise up with ‘Come, follow me’ [Luke 18:22]” (Ronald A. Rasband, “Behold! I Am a God of Miracles,” Liahona, May 2021, 109–10)."
            },
            {
                "noteNumber": 10,
                "text": "Matthew 22:37; see also Deuteronomy 6:5; Doctrine and Covenants 59:5."
            },
            {
                "noteNumber": 11,
                "text": "Matthew 22:39."
            },
            {
                "noteNumber": 12,
                "text": "“Love One Another,” Children’s Songbook, 136; see also John 15:12, 17."
            },
            {
                "noteNumber": 13,
                "text": "Proverbs 3:5–6."
            },
            {
                "noteNumber": 14,
                "text": "Dallin H. Oaks, “Alive in Christ,” Liahona, May 2026, 87."
            },
            {
                "noteNumber": 15,
                "text": "Alma 36:13."
            },
            {
                "noteNumber": 16,
                "text": "Mosiah 27:11, 14."
            },
            {
                "noteNumber": 17,
                "text": "Alma the Elder was among the wicked priests in the court of King Noah. He was converted to the gospel by Abinadi’s discourse about the Son of God and began to build a church faithful to the teachings of Jesus Christ. (See Mosiah 11–18.)"
            },
            {
                "noteNumber": 18,
                "text": "The scriptures do not tell us how often or how long Alma prayed for his son. But we read that Alma the Younger had stolen “away the hearts of the people; causing much dissension” (Mosiah 27:9) and had, according to his own words, “murdered many of [God’s] children, or rather led them away [into] destruction; yea, … so great had been my iniquities” (Alma 36:14). His actions suggest prolonged disobedience."
            },
            {
                "noteNumber": 19,
                "text": "Alma 36:12."
            },
            {
                "noteNumber": 20,
                "text": "Alma 36:17."
            },
            {
                "noteNumber": 21,
                "text": "Alma 36:18."
            },
            {
                "noteNumber": 22,
                "text": "Alma 36:20."
            },
            {
                "noteNumber": 23,
                "text": "Matthew 11:29."
            },
            {
                "noteNumber": 24,
                "text": "John 15:13."
            },
            {
                "noteNumber": 25,
                "text": "Luke 15:13."
            },
            {
                "noteNumber": 26,
                "text": "Luke 15:20."
            },
            {
                "noteNumber": 27,
                "text": "Luke 15:24."
            },
            {
                "noteNumber": 28,
                "text": "Matthew 11:28."
            },
            {
                "noteNumber": 29,
                "text": "See Mosiah 27:14."
            },
            {
                "noteNumber": 30,
                "text": "Thomas S. Monson, “Finding Joy in the Journey,” Liahona, Nov. 2008, 86."
            },
            {
                "noteNumber": 31,
                "text": "John 14:18."
            },
            {
                "noteNumber": 32,
                "text": "Helaman 5:12."
            }
        ]
    },
    {
        "title": "Courage Born of Our Faith in Jesus Christ",
        "author": "Neil L. Andersen",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My dear brothers and sisters, my message is for everyone whose heart aches for loved ones who have turned away from the Lord, stepped away from obedience to God’s laws, breached their covenants, and left behind a string of broken hearts, becoming, as the Bible says, “tossed to and fro.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the Apostle Paul described, you may feel “burdened excessively,” beyond your strength, weighed down as if being “pressed out of measure.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " If I asked for a show of hands of how many feel that way, hands would shoot up in this hall and around the world. Most of us have faced such anguish in our families or circle of friends. I know Sister Rasband and I have."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In our grief, we continuously ponder the "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "whys"
                    },
                    {
                        "type": "text",
                        "text": ", "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "hows,"
                    },
                    {
                        "type": "text",
                        "text": " and "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "what ifs"
                    },
                    {
                        "type": "text",
                        "text": ". We feel we have failed. We spend sleepless nights going over how we tried to draw our loved ones close to Jesus Christ and the Spirit. We preach, cajole, argue, demand, lecture, ignore, sit them down to watch general conference, and even send them links to the talks, like this one, but to no avail. If anything, these efforts can cause a greater rift."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By divine design, brothers and sisters, everyone must choose for themselves to follow Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Book of Mormon prophet Lehi"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " viewed in a dream “numberless concourses of people … pressing forward” to the tree of life, which is the love of Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " But “there arose a mist of darkness,” and some “wandered off,” setting up residence in the growing skyline of great and spacious buildings."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " The adversary’s deceit leads to confusion and misery. He can promise no life eternal, no life with God the Father,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " and no peace."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Not now. Not ever!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "How do we reset the clock while the adversary works overtime to destroy God’s plan of happiness?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Gratefully, the answer is in the Old Testament: “Be not afraid nor dismayed … ; for the battle is not yours, but God’s.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Listen carefully. I ask you to turn over to Jesus Christ your despair for those wayward souls. We cannot change their hearts, but He can; He is a God of miracles."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " We love our family members and friends profoundly, but they are foremost children of our Father in Heaven, who knows and loves them even more than we do. Our Father, the great Elohim, gave His Beloved Son the authority and power necessary to heal all His children. That is the good news of the gospel. By the power of Jesus Christ’s Atonement, there is always a way back!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By His Atonement from the Garden of Gethsemane to the cross on Golgotha, He paid for the sins and bore the disappointments that wrack their souls and yours."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the vernacular, Jesus Christ says to all who grieve, “I’ve got this!”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him. Love can positively influence those who have strayed. The first great commandment is to “love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " And the second great commandment is “Love thy neighbour as thyself.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " As the Primary song says, “As I have loved you, love one another.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is not stepping back or sanctioning others’ decisions and actions. Love is being interested in their lives, their successes, and their challenges. Love is being there with arms outstretched and a cheerful countenance. Love is lifting with faith and hope in our Lord and Savior. Love relies upon the calming influence of the Holy Ghost. The book of Proverbs teaches, “Trust in the Lord with all thine heart; and lean not unto thine own understanding … , and he [will] direct thy paths.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " The path is marked by love."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks has counseled: “Let us avoid what is harsh and hateful. Let us seek to be holy, like our Savior.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " That holiness comes when we are peacemakers, when we are charitable, patient, forgiving, and kind."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is expressed in prayer. In the Book of Mormon, Alma the Younger, talented and smooth-talking, “had rebelled against … God” and “had not kept his holy commandments.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " An angel, “with a voice of thunder,” declared, “The Lord hath heard the prayers of his people, and also the prayers of his servant, Alma, who is thy father; for he has prayed with much faith concerning thee that thou mightest be brought to [a] knowledge of the truth … that the prayers of his servants might be answered according to their faith.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    },
                    {
                        "type": "text",
                        "text": " His father, Alma,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " had prayed for weeks, months, years, maybe decades."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For three long days and nights, young Alma “was racked with eternal torment.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    },
                    {
                        "type": "text",
                        "text": " Somewhere deep within came his father’s teachings of the coming of Jesus Christ “to atone for the sins of the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " Alma cried in his heart, “O Jesus, thou Son of God, have mercy on me.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " The love of the Savior filled him “with joy.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    },
                    {
                        "type": "text",
                        "text": " He became a mighty prophet and a major figure in the Book of Mormon."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Take my yoke upon you, and learn of me,” our Savior says, “ … and ye shall find rest unto your souls.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, Jesus Christ pulls more than His weight. His Atonement is witness of His all-encompassing love for each one of us. Brutal as it was for Him, His Atonement was crucial for our eternal journey. Remember, “Greater love hath no man than this, that a man lay down his life for his friends.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "24"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He has already paid for the sins and errant choices of all of God’s children, including those for whom you and I grieve. He knows them. He knows their hearts; He loves them. He gave His very life to bring them home, all the way home."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Remember the prodigal son who chose to leave his safe moorings for “riotous living.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "25"
                    },
                    {
                        "type": "text",
                        "text": " He lost his fortune and his self-respect, and he returned home in a wretched state."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“When he was yet a great way off, his father saw him, and had compassion, and ran [to him].”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "26"
                    },
                    {
                        "type": "text",
                        "text": " “He was lost” and now was “found.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "27"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What brought him back? It was love. He knew where to find it. Love, brothers and sisters, is the answer to connecting with all of our loved ones. Our Father extends His protective arms to us and to those still distant from Him and His Son. He asks us to do the same. Jesus Christ beckons, “Come unto me, all ye that labour and are heavy laden, and I will give you rest.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "28"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I close with three suggestions to help us find rest:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, let go of any guilt. We fail only when we give up and stop trying, so never, never give up on those you love. Remember the example of Alma praying for his son."
                    },
                    {
                        "type": "note",
                        "noteNumber": "29"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Second, follow the admonition of President Thomas S. Monson: “Never let a problem to be solved become more important than a person to be loved.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "30"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Third, remember Jesus Christ is the answer. He is, always has been, and always will be. Seek Him through study of the scriptures and words of prophets, apostles, men and women leaders who are devoted to serving the Lord. And pray. Pray mightily to our Heavenly Father in the name of Jesus Christ. He will not leave us “comfortless.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "31"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I promise you, as an Apostle of the Lord Jesus Christ, that when the devil sends “forth his mighty winds” pulling loved ones off course, “his mighty storm … shall have no power … to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "32"
                    },
                    {
                        "type": "text",
                        "text": " If that rock is Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Trust Him. He’s got this! In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Ephesians 4:14."
            },
            {
                "noteNumber": 2,
                "text": "The phrase “pressed out of measure” in the King James Version of 2 Corinthians 1:8 is translated as “burdened excessively” in the New American Standard Bible."
            },
            {
                "noteNumber": 3,
                "text": "Lehi was the first prophet and patriarch in the Book of Mormon, who lived 600 years before Jesus Christ. He saw in vision the destruction of Jerusalem (see 1 Nephi 1:4) and the tree of life (see 1 Nephi 8). He led his family as instructed by the Lord into the wilderness (see 1 Nephi 2) and on their ocean journey to the promised land (see 1 Nephi 17–18). His sons Nephi and Jacob became great prophets with, for a time, righteous posterity called Nephites (see 2 Nephi 4–6). His sons Laman and Lemuel were rebellious and led away generations of their posterity, Lamanites, from the word of God (see 2 Nephi 5)."
            },
            {
                "noteNumber": 4,
                "text": "See 1 Nephi 8:21. Lehi saw in vision a beautiful tree with fruit, which was “most sweet, above all” (1 Nephi 8:11). The tree represents the love of Jesus Christ—the majesty of His ministry and atoning sacrifice."
            },
            {
                "noteNumber": 5,
                "text": "See 1 Nephi 8:23, 26."
            },
            {
                "noteNumber": 6,
                "text": "Eternal life means “to gain salvation, the blessings of eternal family, and exaltation, which is ‘the highest state of happiness and glory’ [Guide to the Scriptures, “Exaltation,” Gospel Library]. Through God’s love and grace, all His children will be resurrected after they die and enjoy immortality (see Moroni 7:41). Eternal life goes beyond immortality and includes inheriting the highest degree of the celestial kingdom, continuing in an eternal family, and being like God and living in His presence” (Topics and Questions, “Eternal Life,” Gospel Library)."
            },
            {
                "noteNumber": 7,
                "text": "Peace is freedom from contention and turmoil and brings inner calm. Jesus Christ promised: “Peace I leave with you … : not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid” (John 14:27)."
            },
            {
                "noteNumber": 8,
                "text": "2 Chronicles 20:15."
            },
            {
                "noteNumber": 9,
                "text": "Miracles are divine acts, manifestations and expressions of God’s limitless power, and an affirmation that He “is the same yesterday, today, and forever” (Moroni 10:19). As I taught in a previous general conference address, “Jesus Christ, who created the seas, can calm them; He who gave sight to the blind can lift our sights to heaven; He who cleansed the lepers can mend our infirmities; He who healed the impotent man can call for us to rise up with ‘Come, follow me’ [Luke 18:22]” (Ronald A. Rasband, “Behold! I Am a God of Miracles,” Liahona, May 2021, 109–10)."
            },
            {
                "noteNumber": 10,
                "text": "Matthew 22:37; see also Deuteronomy 6:5; Doctrine and Covenants 59:5."
            },
            {
                "noteNumber": 11,
                "text": "Matthew 22:39."
            },
            {
                "noteNumber": 12,
                "text": "“Love One Another,” Children’s Songbook, 136; see also John 15:12, 17."
            },
            {
                "noteNumber": 13,
                "text": "Proverbs 3:5–6."
            },
            {
                "noteNumber": 14,
                "text": "Dallin H. Oaks, “Alive in Christ,” Liahona, May 2026, 87."
            },
            {
                "noteNumber": 15,
                "text": "Alma 36:13."
            },
            {
                "noteNumber": 16,
                "text": "Mosiah 27:11, 14."
            },
            {
                "noteNumber": 17,
                "text": "Alma the Elder was among the wicked priests in the court of King Noah. He was converted to the gospel by Abinadi’s discourse about the Son of God and began to build a church faithful to the teachings of Jesus Christ. (See Mosiah 11–18.)"
            },
            {
                "noteNumber": 18,
                "text": "The scriptures do not tell us how often or how long Alma prayed for his son. But we read that Alma the Younger had stolen “away the hearts of the people; causing much dissension” (Mosiah 27:9) and had, according to his own words, “murdered many of [God’s] children, or rather led them away [into] destruction; yea, … so great had been my iniquities” (Alma 36:14). His actions suggest prolonged disobedience."
            },
            {
                "noteNumber": 19,
                "text": "Alma 36:12."
            },
            {
                "noteNumber": 20,
                "text": "Alma 36:17."
            },
            {
                "noteNumber": 21,
                "text": "Alma 36:18."
            },
            {
                "noteNumber": 22,
                "text": "Alma 36:20."
            },
            {
                "noteNumber": 23,
                "text": "Matthew 11:29."
            },
            {
                "noteNumber": 24,
                "text": "John 15:13."
            },
            {
                "noteNumber": 25,
                "text": "Luke 15:13."
            },
            {
                "noteNumber": 26,
                "text": "Luke 15:20."
            },
            {
                "noteNumber": 27,
                "text": "Luke 15:24."
            },
            {
                "noteNumber": 28,
                "text": "Matthew 11:28."
            },
            {
                "noteNumber": 29,
                "text": "See Mosiah 27:14."
            },
            {
                "noteNumber": 30,
                "text": "Thomas S. Monson, “Finding Joy in the Journey,” Liahona, Nov. 2008, 86."
            },
            {
                "noteNumber": 31,
                "text": "John 14:18."
            },
            {
                "noteNumber": 32,
                "text": "Helaman 5:12."
            }
        ]
    },
    {
        "title": "Take Upon Us His Name",
        "author": "James G. O. Fantone",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My dear brothers and sisters, my message is for everyone whose heart aches for loved ones who have turned away from the Lord, stepped away from obedience to God’s laws, breached their covenants, and left behind a string of broken hearts, becoming, as the Bible says, “tossed to and fro.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the Apostle Paul described, you may feel “burdened excessively,” beyond your strength, weighed down as if being “pressed out of measure.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " If I asked for a show of hands of how many feel that way, hands would shoot up in this hall and around the world. Most of us have faced such anguish in our families or circle of friends. I know Sister Rasband and I have."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In our grief, we continuously ponder the "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "whys"
                    },
                    {
                        "type": "text",
                        "text": ", "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "hows,"
                    },
                    {
                        "type": "text",
                        "text": " and "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "what ifs"
                    },
                    {
                        "type": "text",
                        "text": ". We feel we have failed. We spend sleepless nights going over how we tried to draw our loved ones close to Jesus Christ and the Spirit. We preach, cajole, argue, demand, lecture, ignore, sit them down to watch general conference, and even send them links to the talks, like this one, but to no avail. If anything, these efforts can cause a greater rift."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By divine design, brothers and sisters, everyone must choose for themselves to follow Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Book of Mormon prophet Lehi"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " viewed in a dream “numberless concourses of people … pressing forward” to the tree of life, which is the love of Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " But “there arose a mist of darkness,” and some “wandered off,” setting up residence in the growing skyline of great and spacious buildings."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " The adversary’s deceit leads to confusion and misery. He can promise no life eternal, no life with God the Father,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " and no peace."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Not now. Not ever!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "How do we reset the clock while the adversary works overtime to destroy God’s plan of happiness?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Gratefully, the answer is in the Old Testament: “Be not afraid nor dismayed … ; for the battle is not yours, but God’s.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Listen carefully. I ask you to turn over to Jesus Christ your despair for those wayward souls. We cannot change their hearts, but He can; He is a God of miracles."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " We love our family members and friends profoundly, but they are foremost children of our Father in Heaven, who knows and loves them even more than we do. Our Father, the great Elohim, gave His Beloved Son the authority and power necessary to heal all His children. That is the good news of the gospel. By the power of Jesus Christ’s Atonement, there is always a way back!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By His Atonement from the Garden of Gethsemane to the cross on Golgotha, He paid for the sins and bore the disappointments that wrack their souls and yours."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the vernacular, Jesus Christ says to all who grieve, “I’ve got this!”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him. Love can positively influence those who have strayed. The first great commandment is to “love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " And the second great commandment is “Love thy neighbour as thyself.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " As the Primary song says, “As I have loved you, love one another.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is not stepping back or sanctioning others’ decisions and actions. Love is being interested in their lives, their successes, and their challenges. Love is being there with arms outstretched and a cheerful countenance. Love is lifting with faith and hope in our Lord and Savior. Love relies upon the calming influence of the Holy Ghost. The book of Proverbs teaches, “Trust in the Lord with all thine heart; and lean not unto thine own understanding … , and he [will] direct thy paths.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " The path is marked by love."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks has counseled: “Let us avoid what is harsh and hateful. Let us seek to be holy, like our Savior.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " That holiness comes when we are peacemakers, when we are charitable, patient, forgiving, and kind."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is expressed in prayer. In the Book of Mormon, Alma the Younger, talented and smooth-talking, “had rebelled against … God” and “had not kept his holy commandments.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " An angel, “with a voice of thunder,” declared, “The Lord hath heard the prayers of his people, and also the prayers of his servant, Alma, who is thy father; for he has prayed with much faith concerning thee that thou mightest be brought to [a] knowledge of the truth … that the prayers of his servants might be answered according to their faith.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    },
                    {
                        "type": "text",
                        "text": " His father, Alma,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " had prayed for weeks, months, years, maybe decades."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For three long days and nights, young Alma “was racked with eternal torment.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    },
                    {
                        "type": "text",
                        "text": " Somewhere deep within came his father’s teachings of the coming of Jesus Christ “to atone for the sins of the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " Alma cried in his heart, “O Jesus, thou Son of God, have mercy on me.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " The love of the Savior filled him “with joy.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    },
                    {
                        "type": "text",
                        "text": " He became a mighty prophet and a major figure in the Book of Mormon."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Take my yoke upon you, and learn of me,” our Savior says, “ … and ye shall find rest unto your souls.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, Jesus Christ pulls more than His weight. His Atonement is witness of His all-encompassing love for each one of us. Brutal as it was for Him, His Atonement was crucial for our eternal journey. Remember, “Greater love hath no man than this, that a man lay down his life for his friends.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "24"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He has already paid for the sins and errant choices of all of God’s children, including those for whom you and I grieve. He knows them. He knows their hearts; He loves them. He gave His very life to bring them home, all the way home."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Remember the prodigal son who chose to leave his safe moorings for “riotous living.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "25"
                    },
                    {
                        "type": "text",
                        "text": " He lost his fortune and his self-respect, and he returned home in a wretched state."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“When he was yet a great way off, his father saw him, and had compassion, and ran [to him].”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "26"
                    },
                    {
                        "type": "text",
                        "text": " “He was lost” and now was “found.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "27"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What brought him back? It was love. He knew where to find it. Love, brothers and sisters, is the answer to connecting with all of our loved ones. Our Father extends His protective arms to us and to those still distant from Him and His Son. He asks us to do the same. Jesus Christ beckons, “Come unto me, all ye that labour and are heavy laden, and I will give you rest.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "28"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I close with three suggestions to help us find rest:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, let go of any guilt. We fail only when we give up and stop trying, so never, never give up on those you love. Remember the example of Alma praying for his son."
                    },
                    {
                        "type": "note",
                        "noteNumber": "29"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Second, follow the admonition of President Thomas S. Monson: “Never let a problem to be solved become more important than a person to be loved.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "30"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Third, remember Jesus Christ is the answer. He is, always has been, and always will be. Seek Him through study of the scriptures and words of prophets, apostles, men and women leaders who are devoted to serving the Lord. And pray. Pray mightily to our Heavenly Father in the name of Jesus Christ. He will not leave us “comfortless.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "31"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I promise you, as an Apostle of the Lord Jesus Christ, that when the devil sends “forth his mighty winds” pulling loved ones off course, “his mighty storm … shall have no power … to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "32"
                    },
                    {
                        "type": "text",
                        "text": " If that rock is Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Trust Him. He’s got this! In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Ephesians 4:14."
            },
            {
                "noteNumber": 2,
                "text": "The phrase “pressed out of measure” in the King James Version of 2 Corinthians 1:8 is translated as “burdened excessively” in the New American Standard Bible."
            },
            {
                "noteNumber": 3,
                "text": "Lehi was the first prophet and patriarch in the Book of Mormon, who lived 600 years before Jesus Christ. He saw in vision the destruction of Jerusalem (see 1 Nephi 1:4) and the tree of life (see 1 Nephi 8). He led his family as instructed by the Lord into the wilderness (see 1 Nephi 2) and on their ocean journey to the promised land (see 1 Nephi 17–18). His sons Nephi and Jacob became great prophets with, for a time, righteous posterity called Nephites (see 2 Nephi 4–6). His sons Laman and Lemuel were rebellious and led away generations of their posterity, Lamanites, from the word of God (see 2 Nephi 5)."
            },
            {
                "noteNumber": 4,
                "text": "See 1 Nephi 8:21. Lehi saw in vision a beautiful tree with fruit, which was “most sweet, above all” (1 Nephi 8:11). The tree represents the love of Jesus Christ—the majesty of His ministry and atoning sacrifice."
            },
            {
                "noteNumber": 5,
                "text": "See 1 Nephi 8:23, 26."
            },
            {
                "noteNumber": 6,
                "text": "Eternal life means “to gain salvation, the blessings of eternal family, and exaltation, which is ‘the highest state of happiness and glory’ [Guide to the Scriptures, “Exaltation,” Gospel Library]. Through God’s love and grace, all His children will be resurrected after they die and enjoy immortality (see Moroni 7:41). Eternal life goes beyond immortality and includes inheriting the highest degree of the celestial kingdom, continuing in an eternal family, and being like God and living in His presence” (Topics and Questions, “Eternal Life,” Gospel Library)."
            },
            {
                "noteNumber": 7,
                "text": "Peace is freedom from contention and turmoil and brings inner calm. Jesus Christ promised: “Peace I leave with you … : not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid” (John 14:27)."
            },
            {
                "noteNumber": 8,
                "text": "2 Chronicles 20:15."
            },
            {
                "noteNumber": 9,
                "text": "Miracles are divine acts, manifestations and expressions of God’s limitless power, and an affirmation that He “is the same yesterday, today, and forever” (Moroni 10:19). As I taught in a previous general conference address, “Jesus Christ, who created the seas, can calm them; He who gave sight to the blind can lift our sights to heaven; He who cleansed the lepers can mend our infirmities; He who healed the impotent man can call for us to rise up with ‘Come, follow me’ [Luke 18:22]” (Ronald A. Rasband, “Behold! I Am a God of Miracles,” Liahona, May 2021, 109–10)."
            },
            {
                "noteNumber": 10,
                "text": "Matthew 22:37; see also Deuteronomy 6:5; Doctrine and Covenants 59:5."
            },
            {
                "noteNumber": 11,
                "text": "Matthew 22:39."
            },
            {
                "noteNumber": 12,
                "text": "“Love One Another,” Children’s Songbook, 136; see also John 15:12, 17."
            },
            {
                "noteNumber": 13,
                "text": "Proverbs 3:5–6."
            },
            {
                "noteNumber": 14,
                "text": "Dallin H. Oaks, “Alive in Christ,” Liahona, May 2026, 87."
            },
            {
                "noteNumber": 15,
                "text": "Alma 36:13."
            },
            {
                "noteNumber": 16,
                "text": "Mosiah 27:11, 14."
            },
            {
                "noteNumber": 17,
                "text": "Alma the Elder was among the wicked priests in the court of King Noah. He was converted to the gospel by Abinadi’s discourse about the Son of God and began to build a church faithful to the teachings of Jesus Christ. (See Mosiah 11–18.)"
            },
            {
                "noteNumber": 18,
                "text": "The scriptures do not tell us how often or how long Alma prayed for his son. But we read that Alma the Younger had stolen “away the hearts of the people; causing much dissension” (Mosiah 27:9) and had, according to his own words, “murdered many of [God’s] children, or rather led them away [into] destruction; yea, … so great had been my iniquities” (Alma 36:14). His actions suggest prolonged disobedience."
            },
            {
                "noteNumber": 19,
                "text": "Alma 36:12."
            },
            {
                "noteNumber": 20,
                "text": "Alma 36:17."
            },
            {
                "noteNumber": 21,
                "text": "Alma 36:18."
            },
            {
                "noteNumber": 22,
                "text": "Alma 36:20."
            },
            {
                "noteNumber": 23,
                "text": "Matthew 11:29."
            },
            {
                "noteNumber": 24,
                "text": "John 15:13."
            },
            {
                "noteNumber": 25,
                "text": "Luke 15:13."
            },
            {
                "noteNumber": 26,
                "text": "Luke 15:20."
            },
            {
                "noteNumber": 27,
                "text": "Luke 15:24."
            },
            {
                "noteNumber": 28,
                "text": "Matthew 11:28."
            },
            {
                "noteNumber": 29,
                "text": "See Mosiah 27:14."
            },
            {
                "noteNumber": 30,
                "text": "Thomas S. Monson, “Finding Joy in the Journey,” Liahona, Nov. 2008, 86."
            },
            {
                "noteNumber": 31,
                "text": "John 14:18."
            },
            {
                "noteNumber": 32,
                "text": "Helaman 5:12."
            }
        ]
    },
    {
        "title": "Come unto Christ",
        "author": "Edward Dube",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My dear brothers and sisters, my message is for everyone whose heart aches for loved ones who have turned away from the Lord, stepped away from obedience to God’s laws, breached their covenants, and left behind a string of broken hearts, becoming, as the Bible says, “tossed to and fro.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the Apostle Paul described, you may feel “burdened excessively,” beyond your strength, weighed down as if being “pressed out of measure.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " If I asked for a show of hands of how many feel that way, hands would shoot up in this hall and around the world. Most of us have faced such anguish in our families or circle of friends. I know Sister Rasband and I have."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In our grief, we continuously ponder the "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "whys"
                    },
                    {
                        "type": "text",
                        "text": ", "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "hows,"
                    },
                    {
                        "type": "text",
                        "text": " and "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "what ifs"
                    },
                    {
                        "type": "text",
                        "text": ". We feel we have failed. We spend sleepless nights going over how we tried to draw our loved ones close to Jesus Christ and the Spirit. We preach, cajole, argue, demand, lecture, ignore, sit them down to watch general conference, and even send them links to the talks, like this one, but to no avail. If anything, these efforts can cause a greater rift."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By divine design, brothers and sisters, everyone must choose for themselves to follow Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Book of Mormon prophet Lehi"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " viewed in a dream “numberless concourses of people … pressing forward” to the tree of life, which is the love of Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " But “there arose a mist of darkness,” and some “wandered off,” setting up residence in the growing skyline of great and spacious buildings."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " The adversary’s deceit leads to confusion and misery. He can promise no life eternal, no life with God the Father,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " and no peace."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Not now. Not ever!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "How do we reset the clock while the adversary works overtime to destroy God’s plan of happiness?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Gratefully, the answer is in the Old Testament: “Be not afraid nor dismayed … ; for the battle is not yours, but God’s.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Listen carefully. I ask you to turn over to Jesus Christ your despair for those wayward souls. We cannot change their hearts, but He can; He is a God of miracles."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " We love our family members and friends profoundly, but they are foremost children of our Father in Heaven, who knows and loves them even more than we do. Our Father, the great Elohim, gave His Beloved Son the authority and power necessary to heal all His children. That is the good news of the gospel. By the power of Jesus Christ’s Atonement, there is always a way back!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By His Atonement from the Garden of Gethsemane to the cross on Golgotha, He paid for the sins and bore the disappointments that wrack their souls and yours."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the vernacular, Jesus Christ says to all who grieve, “I’ve got this!”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him. Love can positively influence those who have strayed. The first great commandment is to “love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " And the second great commandment is “Love thy neighbour as thyself.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " As the Primary song says, “As I have loved you, love one another.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is not stepping back or sanctioning others’ decisions and actions. Love is being interested in their lives, their successes, and their challenges. Love is being there with arms outstretched and a cheerful countenance. Love is lifting with faith and hope in our Lord and Savior. Love relies upon the calming influence of the Holy Ghost. The book of Proverbs teaches, “Trust in the Lord with all thine heart; and lean not unto thine own understanding … , and he [will] direct thy paths.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " The path is marked by love."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks has counseled: “Let us avoid what is harsh and hateful. Let us seek to be holy, like our Savior.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " That holiness comes when we are peacemakers, when we are charitable, patient, forgiving, and kind."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is expressed in prayer. In the Book of Mormon, Alma the Younger, talented and smooth-talking, “had rebelled against … God” and “had not kept his holy commandments.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " An angel, “with a voice of thunder,” declared, “The Lord hath heard the prayers of his people, and also the prayers of his servant, Alma, who is thy father; for he has prayed with much faith concerning thee that thou mightest be brought to [a] knowledge of the truth … that the prayers of his servants might be answered according to their faith.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    },
                    {
                        "type": "text",
                        "text": " His father, Alma,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " had prayed for weeks, months, years, maybe decades."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For three long days and nights, young Alma “was racked with eternal torment.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    },
                    {
                        "type": "text",
                        "text": " Somewhere deep within came his father’s teachings of the coming of Jesus Christ “to atone for the sins of the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " Alma cried in his heart, “O Jesus, thou Son of God, have mercy on me.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " The love of the Savior filled him “with joy.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    },
                    {
                        "type": "text",
                        "text": " He became a mighty prophet and a major figure in the Book of Mormon."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Take my yoke upon you, and learn of me,” our Savior says, “ … and ye shall find rest unto your souls.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, Jesus Christ pulls more than His weight. His Atonement is witness of His all-encompassing love for each one of us. Brutal as it was for Him, His Atonement was crucial for our eternal journey. Remember, “Greater love hath no man than this, that a man lay down his life for his friends.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "24"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He has already paid for the sins and errant choices of all of God’s children, including those for whom you and I grieve. He knows them. He knows their hearts; He loves them. He gave His very life to bring them home, all the way home."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Remember the prodigal son who chose to leave his safe moorings for “riotous living.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "25"
                    },
                    {
                        "type": "text",
                        "text": " He lost his fortune and his self-respect, and he returned home in a wretched state."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“When he was yet a great way off, his father saw him, and had compassion, and ran [to him].”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "26"
                    },
                    {
                        "type": "text",
                        "text": " “He was lost” and now was “found.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "27"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What brought him back? It was love. He knew where to find it. Love, brothers and sisters, is the answer to connecting with all of our loved ones. Our Father extends His protective arms to us and to those still distant from Him and His Son. He asks us to do the same. Jesus Christ beckons, “Come unto me, all ye that labour and are heavy laden, and I will give you rest.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "28"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I close with three suggestions to help us find rest:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, let go of any guilt. We fail only when we give up and stop trying, so never, never give up on those you love. Remember the example of Alma praying for his son."
                    },
                    {
                        "type": "note",
                        "noteNumber": "29"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Second, follow the admonition of President Thomas S. Monson: “Never let a problem to be solved become more important than a person to be loved.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "30"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Third, remember Jesus Christ is the answer. He is, always has been, and always will be. Seek Him through study of the scriptures and words of prophets, apostles, men and women leaders who are devoted to serving the Lord. And pray. Pray mightily to our Heavenly Father in the name of Jesus Christ. He will not leave us “comfortless.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "31"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I promise you, as an Apostle of the Lord Jesus Christ, that when the devil sends “forth his mighty winds” pulling loved ones off course, “his mighty storm … shall have no power … to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "32"
                    },
                    {
                        "type": "text",
                        "text": " If that rock is Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Trust Him. He’s got this! In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Ephesians 4:14."
            },
            {
                "noteNumber": 2,
                "text": "The phrase “pressed out of measure” in the King James Version of 2 Corinthians 1:8 is translated as “burdened excessively” in the New American Standard Bible."
            },
            {
                "noteNumber": 3,
                "text": "Lehi was the first prophet and patriarch in the Book of Mormon, who lived 600 years before Jesus Christ. He saw in vision the destruction of Jerusalem (see 1 Nephi 1:4) and the tree of life (see 1 Nephi 8). He led his family as instructed by the Lord into the wilderness (see 1 Nephi 2) and on their ocean journey to the promised land (see 1 Nephi 17–18). His sons Nephi and Jacob became great prophets with, for a time, righteous posterity called Nephites (see 2 Nephi 4–6). His sons Laman and Lemuel were rebellious and led away generations of their posterity, Lamanites, from the word of God (see 2 Nephi 5)."
            },
            {
                "noteNumber": 4,
                "text": "See 1 Nephi 8:21. Lehi saw in vision a beautiful tree with fruit, which was “most sweet, above all” (1 Nephi 8:11). The tree represents the love of Jesus Christ—the majesty of His ministry and atoning sacrifice."
            },
            {
                "noteNumber": 5,
                "text": "See 1 Nephi 8:23, 26."
            },
            {
                "noteNumber": 6,
                "text": "Eternal life means “to gain salvation, the blessings of eternal family, and exaltation, which is ‘the highest state of happiness and glory’ [Guide to the Scriptures, “Exaltation,” Gospel Library]. Through God’s love and grace, all His children will be resurrected after they die and enjoy immortality (see Moroni 7:41). Eternal life goes beyond immortality and includes inheriting the highest degree of the celestial kingdom, continuing in an eternal family, and being like God and living in His presence” (Topics and Questions, “Eternal Life,” Gospel Library)."
            },
            {
                "noteNumber": 7,
                "text": "Peace is freedom from contention and turmoil and brings inner calm. Jesus Christ promised: “Peace I leave with you … : not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid” (John 14:27)."
            },
            {
                "noteNumber": 8,
                "text": "2 Chronicles 20:15."
            },
            {
                "noteNumber": 9,
                "text": "Miracles are divine acts, manifestations and expressions of God’s limitless power, and an affirmation that He “is the same yesterday, today, and forever” (Moroni 10:19). As I taught in a previous general conference address, “Jesus Christ, who created the seas, can calm them; He who gave sight to the blind can lift our sights to heaven; He who cleansed the lepers can mend our infirmities; He who healed the impotent man can call for us to rise up with ‘Come, follow me’ [Luke 18:22]” (Ronald A. Rasband, “Behold! I Am a God of Miracles,” Liahona, May 2021, 109–10)."
            },
            {
                "noteNumber": 10,
                "text": "Matthew 22:37; see also Deuteronomy 6:5; Doctrine and Covenants 59:5."
            },
            {
                "noteNumber": 11,
                "text": "Matthew 22:39."
            },
            {
                "noteNumber": 12,
                "text": "“Love One Another,” Children’s Songbook, 136; see also John 15:12, 17."
            },
            {
                "noteNumber": 13,
                "text": "Proverbs 3:5–6."
            },
            {
                "noteNumber": 14,
                "text": "Dallin H. Oaks, “Alive in Christ,” Liahona, May 2026, 87."
            },
            {
                "noteNumber": 15,
                "text": "Alma 36:13."
            },
            {
                "noteNumber": 16,
                "text": "Mosiah 27:11, 14."
            },
            {
                "noteNumber": 17,
                "text": "Alma the Elder was among the wicked priests in the court of King Noah. He was converted to the gospel by Abinadi’s discourse about the Son of God and began to build a church faithful to the teachings of Jesus Christ. (See Mosiah 11–18.)"
            },
            {
                "noteNumber": 18,
                "text": "The scriptures do not tell us how often or how long Alma prayed for his son. But we read that Alma the Younger had stolen “away the hearts of the people; causing much dissension” (Mosiah 27:9) and had, according to his own words, “murdered many of [God’s] children, or rather led them away [into] destruction; yea, … so great had been my iniquities” (Alma 36:14). His actions suggest prolonged disobedience."
            },
            {
                "noteNumber": 19,
                "text": "Alma 36:12."
            },
            {
                "noteNumber": 20,
                "text": "Alma 36:17."
            },
            {
                "noteNumber": 21,
                "text": "Alma 36:18."
            },
            {
                "noteNumber": 22,
                "text": "Alma 36:20."
            },
            {
                "noteNumber": 23,
                "text": "Matthew 11:29."
            },
            {
                "noteNumber": 24,
                "text": "John 15:13."
            },
            {
                "noteNumber": 25,
                "text": "Luke 15:13."
            },
            {
                "noteNumber": 26,
                "text": "Luke 15:20."
            },
            {
                "noteNumber": 27,
                "text": "Luke 15:24."
            },
            {
                "noteNumber": 28,
                "text": "Matthew 11:28."
            },
            {
                "noteNumber": 29,
                "text": "See Mosiah 27:14."
            },
            {
                "noteNumber": 30,
                "text": "Thomas S. Monson, “Finding Joy in the Journey,” Liahona, Nov. 2008, 86."
            },
            {
                "noteNumber": 31,
                "text": "John 14:18."
            },
            {
                "noteNumber": 32,
                "text": "Helaman 5:12."
            }
        ]
    },
    {
        "title": "Integrity and Virtue Lead to Happiness",
        "author": "Quentin L. Cook",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My dear brothers and sisters, my message is for everyone whose heart aches for loved ones who have turned away from the Lord, stepped away from obedience to God’s laws, breached their covenants, and left behind a string of broken hearts, becoming, as the Bible says, “tossed to and fro.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the Apostle Paul described, you may feel “burdened excessively,” beyond your strength, weighed down as if being “pressed out of measure.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " If I asked for a show of hands of how many feel that way, hands would shoot up in this hall and around the world. Most of us have faced such anguish in our families or circle of friends. I know Sister Rasband and I have."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In our grief, we continuously ponder the "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "whys"
                    },
                    {
                        "type": "text",
                        "text": ", "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "hows,"
                    },
                    {
                        "type": "text",
                        "text": " and "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "what ifs"
                    },
                    {
                        "type": "text",
                        "text": ". We feel we have failed. We spend sleepless nights going over how we tried to draw our loved ones close to Jesus Christ and the Spirit. We preach, cajole, argue, demand, lecture, ignore, sit them down to watch general conference, and even send them links to the talks, like this one, but to no avail. If anything, these efforts can cause a greater rift."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By divine design, brothers and sisters, everyone must choose for themselves to follow Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Book of Mormon prophet Lehi"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " viewed in a dream “numberless concourses of people … pressing forward” to the tree of life, which is the love of Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " But “there arose a mist of darkness,” and some “wandered off,” setting up residence in the growing skyline of great and spacious buildings."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " The adversary’s deceit leads to confusion and misery. He can promise no life eternal, no life with God the Father,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " and no peace."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " Not now. Not ever!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "How do we reset the clock while the adversary works overtime to destroy God’s plan of happiness?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Gratefully, the answer is in the Old Testament: “Be not afraid nor dismayed … ; for the battle is not yours, but God’s.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Listen carefully. I ask you to turn over to Jesus Christ your despair for those wayward souls. We cannot change their hearts, but He can; He is a God of miracles."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " We love our family members and friends profoundly, but they are foremost children of our Father in Heaven, who knows and loves them even more than we do. Our Father, the great Elohim, gave His Beloved Son the authority and power necessary to heal all His children. That is the good news of the gospel. By the power of Jesus Christ’s Atonement, there is always a way back!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "By His Atonement from the Garden of Gethsemane to the cross on Golgotha, He paid for the sins and bore the disappointments that wrack their souls and yours."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the vernacular, Jesus Christ says to all who grieve, “I’ve got this!”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ is the perfect embodiment of love. Love is the centerpiece of His gospel and the essence of being like Him. Love can positively influence those who have strayed. The first great commandment is to “love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " And the second great commandment is “Love thy neighbour as thyself.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " As the Primary song says, “As I have loved you, love one another.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is not stepping back or sanctioning others’ decisions and actions. Love is being interested in their lives, their successes, and their challenges. Love is being there with arms outstretched and a cheerful countenance. Love is lifting with faith and hope in our Lord and Savior. Love relies upon the calming influence of the Holy Ghost. The book of Proverbs teaches, “Trust in the Lord with all thine heart; and lean not unto thine own understanding … , and he [will] direct thy paths.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " The path is marked by love."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks has counseled: “Let us avoid what is harsh and hateful. Let us seek to be holy, like our Savior.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " That holiness comes when we are peacemakers, when we are charitable, patient, forgiving, and kind."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Love is expressed in prayer. In the Book of Mormon, Alma the Younger, talented and smooth-talking, “had rebelled against … God” and “had not kept his holy commandments.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " An angel, “with a voice of thunder,” declared, “The Lord hath heard the prayers of his people, and also the prayers of his servant, Alma, who is thy father; for he has prayed with much faith concerning thee that thou mightest be brought to [a] knowledge of the truth … that the prayers of his servants might be answered according to their faith.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    },
                    {
                        "type": "text",
                        "text": " His father, Alma,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " had prayed for weeks, months, years, maybe decades."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For three long days and nights, young Alma “was racked with eternal torment.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    },
                    {
                        "type": "text",
                        "text": " Somewhere deep within came his father’s teachings of the coming of Jesus Christ “to atone for the sins of the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " Alma cried in his heart, “O Jesus, thou Son of God, have mercy on me.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " The love of the Savior filled him “with joy.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    },
                    {
                        "type": "text",
                        "text": " He became a mighty prophet and a major figure in the Book of Mormon."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Take my yoke upon you, and learn of me,” our Savior says, “ … and ye shall find rest unto your souls.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, Jesus Christ pulls more than His weight. His Atonement is witness of His all-encompassing love for each one of us. Brutal as it was for Him, His Atonement was crucial for our eternal journey. Remember, “Greater love hath no man than this, that a man lay down his life for his friends.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "24"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He has already paid for the sins and errant choices of all of God’s children, including those for whom you and I grieve. He knows them. He knows their hearts; He loves them. He gave His very life to bring them home, all the way home."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Remember the prodigal son who chose to leave his safe moorings for “riotous living.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "25"
                    },
                    {
                        "type": "text",
                        "text": " He lost his fortune and his self-respect, and he returned home in a wretched state."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“When he was yet a great way off, his father saw him, and had compassion, and ran [to him].”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "26"
                    },
                    {
                        "type": "text",
                        "text": " “He was lost” and now was “found.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "27"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What brought him back? It was love. He knew where to find it. Love, brothers and sisters, is the answer to connecting with all of our loved ones. Our Father extends His protective arms to us and to those still distant from Him and His Son. He asks us to do the same. Jesus Christ beckons, “Come unto me, all ye that labour and are heavy laden, and I will give you rest.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "28"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I close with three suggestions to help us find rest:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, let go of any guilt. We fail only when we give up and stop trying, so never, never give up on those you love. Remember the example of Alma praying for his son."
                    },
                    {
                        "type": "note",
                        "noteNumber": "29"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Second, follow the admonition of President Thomas S. Monson: “Never let a problem to be solved become more important than a person to be loved.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "30"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Third, remember Jesus Christ is the answer. He is, always has been, and always will be. Seek Him through study of the scriptures and words of prophets, apostles, men and women leaders who are devoted to serving the Lord. And pray. Pray mightily to our Heavenly Father in the name of Jesus Christ. He will not leave us “comfortless.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "31"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I promise you, as an Apostle of the Lord Jesus Christ, that when the devil sends “forth his mighty winds” pulling loved ones off course, “his mighty storm … shall have no power … to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "32"
                    },
                    {
                        "type": "text",
                        "text": " If that rock is Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Trust Him. He’s got this! In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Ephesians 4:14."
            },
            {
                "noteNumber": 2,
                "text": "The phrase “pressed out of measure” in the King James Version of 2 Corinthians 1:8 is translated as “burdened excessively” in the New American Standard Bible."
            },
            {
                "noteNumber": 3,
                "text": "Lehi was the first prophet and patriarch in the Book of Mormon, who lived 600 years before Jesus Christ. He saw in vision the destruction of Jerusalem (see 1 Nephi 1:4) and the tree of life (see 1 Nephi 8). He led his family as instructed by the Lord into the wilderness (see 1 Nephi 2) and on their ocean journey to the promised land (see 1 Nephi 17–18). His sons Nephi and Jacob became great prophets with, for a time, righteous posterity called Nephites (see 2 Nephi 4–6). His sons Laman and Lemuel were rebellious and led away generations of their posterity, Lamanites, from the word of God (see 2 Nephi 5)."
            },
            {
                "noteNumber": 4,
                "text": "See 1 Nephi 8:21. Lehi saw in vision a beautiful tree with fruit, which was “most sweet, above all” (1 Nephi 8:11). The tree represents the love of Jesus Christ—the majesty of His ministry and atoning sacrifice."
            },
            {
                "noteNumber": 5,
                "text": "See 1 Nephi 8:23, 26."
            },
            {
                "noteNumber": 6,
                "text": "Eternal life means “to gain salvation, the blessings of eternal family, and exaltation, which is ‘the highest state of happiness and glory’ [Guide to the Scriptures, “Exaltation,” Gospel Library]. Through God’s love and grace, all His children will be resurrected after they die and enjoy immortality (see Moroni 7:41). Eternal life goes beyond immortality and includes inheriting the highest degree of the celestial kingdom, continuing in an eternal family, and being like God and living in His presence” (Topics and Questions, “Eternal Life,” Gospel Library)."
            },
            {
                "noteNumber": 7,
                "text": "Peace is freedom from contention and turmoil and brings inner calm. Jesus Christ promised: “Peace I leave with you … : not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid” (John 14:27)."
            },
            {
                "noteNumber": 8,
                "text": "2 Chronicles 20:15."
            },
            {
                "noteNumber": 9,
                "text": "Miracles are divine acts, manifestations and expressions of God’s limitless power, and an affirmation that He “is the same yesterday, today, and forever” (Moroni 10:19). As I taught in a previous general conference address, “Jesus Christ, who created the seas, can calm them; He who gave sight to the blind can lift our sights to heaven; He who cleansed the lepers can mend our infirmities; He who healed the impotent man can call for us to rise up with ‘Come, follow me’ [Luke 18:22]” (Ronald A. Rasband, “Behold! I Am a God of Miracles,” Liahona, May 2021, 109–10)."
            },
            {
                "noteNumber": 10,
                "text": "Matthew 22:37; see also Deuteronomy 6:5; Doctrine and Covenants 59:5."
            },
            {
                "noteNumber": 11,
                "text": "Matthew 22:39."
            },
            {
                "noteNumber": 12,
                "text": "“Love One Another,” Children’s Songbook, 136; see also John 15:12, 17."
            },
            {
                "noteNumber": 13,
                "text": "Proverbs 3:5–6."
            },
            {
                "noteNumber": 14,
                "text": "Dallin H. Oaks, “Alive in Christ,” Liahona, May 2026, 87."
            },
            {
                "noteNumber": 15,
                "text": "Alma 36:13."
            },
            {
                "noteNumber": 16,
                "text": "Mosiah 27:11, 14."
            },
            {
                "noteNumber": 17,
                "text": "Alma the Elder was among the wicked priests in the court of King Noah. He was converted to the gospel by Abinadi’s discourse about the Son of God and began to build a church faithful to the teachings of Jesus Christ. (See Mosiah 11–18.)"
            },
            {
                "noteNumber": 18,
                "text": "The scriptures do not tell us how often or how long Alma prayed for his son. But we read that Alma the Younger had stolen “away the hearts of the people; causing much dissension” (Mosiah 27:9) and had, according to his own words, “murdered many of [God’s] children, or rather led them away [into] destruction; yea, … so great had been my iniquities” (Alma 36:14). His actions suggest prolonged disobedience."
            },
            {
                "noteNumber": 19,
                "text": "Alma 36:12."
            },
            {
                "noteNumber": 20,
                "text": "Alma 36:17."
            },
            {
                "noteNumber": 21,
                "text": "Alma 36:18."
            },
            {
                "noteNumber": 22,
                "text": "Alma 36:20."
            },
            {
                "noteNumber": 23,
                "text": "Matthew 11:29."
            },
            {
                "noteNumber": 24,
                "text": "John 15:13."
            },
            {
                "noteNumber": 25,
                "text": "Luke 15:13."
            },
            {
                "noteNumber": 26,
                "text": "Luke 15:20."
            },
            {
                "noteNumber": 27,
                "text": "Luke 15:24."
            },
            {
                "noteNumber": 28,
                "text": "Matthew 11:28."
            },
            {
                "noteNumber": 29,
                "text": "See Mosiah 27:14."
            },
            {
                "noteNumber": 30,
                "text": "Thomas S. Monson, “Finding Joy in the Journey,” Liahona, Nov. 2008, 86."
            },
            {
                "noteNumber": 31,
                "text": "John 14:18."
            },
            {
                "noteNumber": 32,
                "text": "Helaman 5:12."
            }
        ]
    },
    {
        "title": "Using the Language of Peacemakers",
        "author": "Alfred Kyungu",
        "authorRole": "Of the Seventy",
        "kicker": "We must choose language that strengthens confidence and preserves relationships.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the last speaker of the Sunday morning session of the April 2026 general conference, President Dallin H. Oaks said: “My brothers and sisters, as followers of Christ, let us follow Him by forgoing contention and by using the language and methods of peacemakers. In our families and other personal relationships, let us avoid what is harsh and hateful.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As he concluded the conference on Sunday afternoon, President Oaks extended an invitation to all of us. He said, “As the messages from this conference are published, we invite all to study and ponder them prayerfully and to act in faith on the principles they explain.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "This invitation to forgo contention by using the language of peacemakers comes from the living prophet. It is not a simple suggestion; it is a call to discipleship as we follow Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I began pondering on President Oaks’s invitation and how I could act with faith accordingly. It is a spiritual exercise to identify the language and expressions we need to forgo and then replace them with words and phrases that bring peace wherever we are and at all times."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "From ancient times, the Lord has counseled His people to avoid contention, dispute, and language that create conflict. In Proverbs we read, “These six things doth the Lord hate: yea, seven are an abomination unto him.” Among them are “a lying tongue, … a false witness that speaketh lies, and he that soweth discord among brethren.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "During His earthly ministry, the Lord Jesus Christ taught:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“But I say unto you, That every idle word that men shall speak, they shall give account thereof in the day of judgment."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“For by thy words thou shalt be justified, and by thy words thou shalt be condemned.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Apostle Paul wrote to the Ephesians, “Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Likewise, in Colossians the Saints were counseled to be wise even in their speech: “Let your speech be alway with grace, … that ye may know how ye ought to answer every man.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I believe that all of us in this mortal journey have been hurt by some form of humiliating, degrading, or discouraging language from a family member, a colleague at work, a friend, or even a fellow member of the Church."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "There are expressions and words that can damage relationships and therefore need to be forgone in our communication. Examples include: “You are useless.” “You are stupid.” “You never do anything right.” “What is wrong with you?” “This is all your fault.” “You always mess things up.” “You never listen.” “You caused this problem.” “Leave me alone.” “I do not care.” “I do not need you in my life.” “I do not care about you.” “Just stop talking.” “I am tired of you.” The list could go on. Such words never edify. They weaken love, diminish respect, and damage relationships."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Rather than choosing words and language that escalate feelings of anger, disappointment, and frustration, let us use words that encourage understanding and peace. We must choose language that strengthens confidence and preserves relationships. Words such as: “Please.” “Thank you.” “I appreciate that.” “I respect your view.” “This is a good point.” “Let us slow down and talk.” “We can work this out.” “It is OK.” “Let us stay calm.” “We don’t have to rush.” “I care about you.” “I am here for you.” “You are not alone.” “How are you feeling?” “That matters to me.” “I’m sorry.” “Please forgive me.” “I forgive you.” “Let us start again.” “I don’t want this to divide us.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the converted Lamanites “buried the weapons of war, for peace,”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " we too can bury the language of contention for peace. President Thomas S. Monson taught us “to refrain from anger and to leave unsaid the harsh and hurtful things we may be tempted to say.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " In hymn number 224, we sing, “I must speak the loving word, ere the sun goes down.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " We learn from the New Testament that “out of the abundance of the heart the mouth speaketh.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Therefore, let us fill our hearts with the true doctrine of Christ, which has the power to change our language and help us speak more as peacemakers today, tomorrow, and always. As we follow Jesus Christ, we will not only feel His peace, but, as Elder Ulisses Soares said, “We can become instruments of His peace in the world.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Let us repent for the harsh language and expressions that have offended our friends, leaders, family members, or colleagues. Let us pray for peaceful communication among us, regardless of the difference in our opinions. Let us use the language that uplifts, edifies, comforts, and brings people together. Let us speak with “warm respect when we speak with each other.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    },
                    {
                        "type": "text",
                        "text": " “Let us qualify for His blessings by using the language … of peacemakers.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Savior promised, “Peace I leave with you, my peace I give unto you.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " This peace is real. It is powerful, and it begins with us—with our hearts, our choices, and our words."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I bear my witness that our Heavenly Father loves us and desires us to live in peace and harmony. Jesus Christ is the Prince of Peace. President Dallin H. Oaks is the prophet of God on the earth today, inviting us to communicate as peacemakers. In the sacred name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Dallin H. Oaks, “Alive in Christ,” Liahona, May 2026, 87."
            },
            {
                "noteNumber": 2,
                "text": "Dallin H. Oaks, “Closing Remarks,” Liahona, May 2026, 114."
            },
            {
                "noteNumber": 3,
                "text": "Proverbs 6:16, 17, 19."
            },
            {
                "noteNumber": 4,
                "text": "Matthew 12:36–37."
            },
            {
                "noteNumber": 5,
                "text": "Ephesians 4:29."
            },
            {
                "noteNumber": 6,
                "text": "Colossians 4:6."
            },
            {
                "noteNumber": 7,
                "text": "Alma 24:19."
            },
            {
                "noteNumber": 8,
                "text": "Thomas S. Monson, “School Thy Feelings, O My Brother,” Liahona, Nov. 2009, 69."
            },
            {
                "noteNumber": 9,
                "text": "“I Have Work Enough to Do,” Hymns, no. 224."
            },
            {
                "noteNumber": 10,
                "text": "Matthew 12:34."
            },
            {
                "noteNumber": 11,
                "text": "Ulisses Soares, “Followers of the Prince of Peace,” Liahona, May 2023, 87."
            },
            {
                "noteNumber": 12,
                "text": "Gerrit W. Gong, “Love Is Spoken Here,” Liahona, Nov. 2023, 111."
            },
            {
                "noteNumber": 13,
                "text": "Dallin H. Oaks, “Following Christ,” Liahona, Nov. 2024, 25."
            },
            {
                "noteNumber": 14,
                "text": "John 14:27."
            }
        ]
    },
    {
        "title": "Consider Your Ways, and from This Day Will the Lord Bless You",
        "author": "Ciro Schmeil",
        "authorRole": "Of the Seventy",
        "kicker": "Our Savior, Jesus Christ, and our covenants are essential to guide us through the covenant path and help us overcome our challenges and weaknesses.",
        "bodySections": [
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Plan of Happiness"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God is our Father in Heaven, and He prepared a plan for us to return to His presence. The scriptures call this the plan of salvation or “the great plan of happiness” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Alma 42:8",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/42?lang=eng&id=p8#p8"
                    },
                    {
                        "type": "text",
                        "text": "). According to this plan, “this life is the time for [us] to prepare to meet God” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Alma 34:32",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=eng&id=p32#p32"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And God did not leave us alone in this journey. As President Dallin H. Oaks has taught, God gave us “divine helps for mortality”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " that can help us back to His presence. I will mention two of these divine helps: the Savior Jesus Christ and our covenants."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our Savior, Jesus Christ, and our covenants are essential to guide us through the covenant path and help us overcome our challenges and weaknesses. Jesus Christ knows us individually, and He will help us if we seek Him: “And if men come unto me I will show unto them their weakness. … For if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Ether 12:27",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=eng&id=p27#p27"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "According to this scripture, we need to be humble and have faith in Christ for the weak things to become strong. A central feature of humility is having a broken heart, which means to be receptive to the will of God."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " To be receptive to the will of God, we must have faith in Christ, which means that we trust Him even when we don’t have all the answers. President Oaks said: “By far, God’s strongest mortal help was His provision of a Savior, Jesus Christ, who would suffer to pay the price and provide forgiveness for repented sins. That merciful and glorious Atonement explains why faith in the Lord Jesus Christ is the first principle of the gospel.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Covenants"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We show our faith in Christ by making and keeping covenants with God. “A covenant is a sacred promise between God and His children. God gives the conditions for the covenant, and His children agree to obey those conditions. God promises to bless His children as they fulfill the covenant.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Covenants bind us to Jesus Christ because He is central to every covenant we make. In Matthew 11, the Savior extends a beautiful invitation and a promise to all of us. He said:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Come unto me, … and I will give you rest."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Take my yoke upon you, and learn of me; … and ye shall find rest unto your souls."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“For my yoke is easy, and my burden is light” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Matthew 11:28–30",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/11?lang=eng&id=p28-p30#p28"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It is through covenants that we become yoked with the Savior Jesus Christ and our burdens become lighter."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The baptismal covenant is the first covenant we make with God. We then make a new covenant with Him each week as we partake of the sacrament during our Sunday worship wherein we renew promises made at baptism and covenant to always remember the Savior."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " Jesus Christ instituted the sacrament to help us remember Him with the promise that if we do so, we will have His Spirit with us (see "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Luke 22:19–20",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/22?lang=eng&id=p19-p20#p19"
                    },
                    {
                        "type": "text",
                        "text": "; "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "3 Nephi 18:11",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/18?lang=eng&id=p11#p11"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the sacrament prayer we have a good reminder that we do not need to be perfect to partake of the sacrament. We need to be "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "willing"
                    },
                    {
                        "type": "text",
                        "text": " to take upon us His name, remember Him, and keep His commandments, and in return we have the promise to always have His Spirit with us. The sacrament is essential to have the Spirit and the strength to continue on the covenant path."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Elder Dale G. Renlund has reminded and warned us that “the time will come, in each of your lives, when there will be a hesitation to go to church and partake of the sacrament. If it hasn’t happened yet, it will. But know this: if you follow the Savior’s direction and go and partake of the sacrament, with a broken heart and a contrite spirit, blessings will pour upon you that will keep you firm, that will keep you solid, that will keep you established on that firm foundation that is Jesus Christ.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Preach My Gospel"
                    },
                    {
                        "type": "text",
                        "text": " we also learn that “as we make our Sabbath activities compatible with God’s intent for the day, we will feel joy and peace. We will be spiritually nourished and physically refreshed.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " What a blessing it is for us to partake of the sacrament each week."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The sacrament also prepares us to make and keep temple covenants. We can draw insight about the importance and the blessings of the temple covenants as we read the account of the prophet Haggai in the Old Testament."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Lord had commanded the Israelites to rebuild the temple, but they did not make it a priority. Displeased with them, the Lord said:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Consider your ways."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Ye have sown much, and bring in little; … and he that earneth wages earneth wages to put it into a bag with holes."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Thus saith the Lord of hosts; Consider your ways."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“… Why? … Because of mine house that is waste, and ye run every man unto his own house” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Haggai 1:5–7, 9",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/hag/1?lang=eng&id=p5-p7,p9#p5"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We learn from this account that the Lord could not magnify their efforts because their actions were not aligned with God’s will. Although they were doing much, they were not accomplishing much because God’s holy house was not a priority in their lives."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As they considered their ways, they repented and followed God’s direction. As soon as they started to rebuild the temple, the Lord said, “From this day will I bless you” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Haggai 2:19",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/hag/2?lang=eng&id=p19#p19"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Blessings"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "May we also consider our ways. Heavenly Father is not asking us to physically build the temple, but He is asking us to build a strong relationship with Him and His Son, Jesus Christ, through our covenants. He will magnify our efforts as we consider our ways and make the proper adjustments to make and keep covenants with Him. God knows what is best for us and is eager to bless us. Remember what He said to the Israelites: “From this day will I bless you” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Haggai 2:19",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/hag/2?lang=eng&id=p19#p19"
                    },
                    {
                        "type": "text",
                        "text": "). I know that God keeps His promises. I have seen it in my life. He gave me spiritual and physical strength when I needed it most."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The sacrament has helped me to keep my baptismal and temple covenants. It is a weekly reminder of what the Savior Jesus Christ has done for me and how much I need Him in my life as I walk the covenant path back to His presence."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "May we consider our ways and remember the words of King Benjamin when he said: “Consider on the blessed and happy state of those that keep the commandments of God. For behold, they are blessed in all things, both temporal and spiritual; and if they hold out faithful to the end they are received into heaven, that thereby they may dwell with God in a state of never-ending happiness” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Mosiah 2:41",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng&id=p41#p41"
                    },
                    {
                        "type": "text",
                        "text": "). This is possible only as we make and keep covenants. In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "See Dallin H. Oaks, “Divine Helps for Mortality,” Liahona, May 2025, 104–6."
            },
            {
                "noteNumber": 2,
                "text": "See Guide to the Scriptures, “Humble, Humility,” Gospel Library."
            },
            {
                "noteNumber": 3,
                "text": "Dallin H. Oaks, “Divine Helps for Mortality,” 104."
            },
            {
                "noteNumber": 4,
                "text": "General Handbook: Serving in The Church of Jesus Christ of Latter-day Saints, 3.5.2, Gospel Library."
            },
            {
                "noteNumber": 5,
                "text": "See Dale G. Renlund, “Unwavering Commitment to Jesus Christ,” Liahona, Nov. 2019, 25, note 18."
            },
            {
                "noteNumber": 6,
                "text": "Dale G. Renlund, “Come unto Christ” (Brigham Young University–Idaho devotional, Sept. 26, 2017), byui.edu."
            },
            {
                "noteNumber": 7,
                "text": "Preach My Gospel: A Guide to Sharing the Gospel of Jesus Christ (2023), 88."
            }
        ]
    },
    {
        "title": "The Gospel of Jesus Christ Is for All",
        "author": "Dallin H. Oaks",
        "authorRole": "Of the Seventy",
        "kicker": "Our Savior, Jesus Christ, and our covenants are essential to guide us through the covenant path and help us overcome our challenges and weaknesses.",
        "bodySections": [
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Plan of Happiness"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God is our Father in Heaven, and He prepared a plan for us to return to His presence. The scriptures call this the plan of salvation or “the great plan of happiness” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Alma 42:8",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/42?lang=eng&id=p8#p8"
                    },
                    {
                        "type": "text",
                        "text": "). According to this plan, “this life is the time for [us] to prepare to meet God” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Alma 34:32",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=eng&id=p32#p32"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And God did not leave us alone in this journey. As President Dallin H. Oaks has taught, God gave us “divine helps for mortality”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " that can help us back to His presence. I will mention two of these divine helps: the Savior Jesus Christ and our covenants."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our Savior, Jesus Christ, and our covenants are essential to guide us through the covenant path and help us overcome our challenges and weaknesses. Jesus Christ knows us individually, and He will help us if we seek Him: “And if men come unto me I will show unto them their weakness. … For if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Ether 12:27",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=eng&id=p27#p27"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "According to this scripture, we need to be humble and have faith in Christ for the weak things to become strong. A central feature of humility is having a broken heart, which means to be receptive to the will of God."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " To be receptive to the will of God, we must have faith in Christ, which means that we trust Him even when we don’t have all the answers. President Oaks said: “By far, God’s strongest mortal help was His provision of a Savior, Jesus Christ, who would suffer to pay the price and provide forgiveness for repented sins. That merciful and glorious Atonement explains why faith in the Lord Jesus Christ is the first principle of the gospel.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Covenants"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We show our faith in Christ by making and keeping covenants with God. “A covenant is a sacred promise between God and His children. God gives the conditions for the covenant, and His children agree to obey those conditions. God promises to bless His children as they fulfill the covenant.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Covenants bind us to Jesus Christ because He is central to every covenant we make. In Matthew 11, the Savior extends a beautiful invitation and a promise to all of us. He said:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Come unto me, … and I will give you rest."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Take my yoke upon you, and learn of me; … and ye shall find rest unto your souls."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“For my yoke is easy, and my burden is light” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Matthew 11:28–30",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/11?lang=eng&id=p28-p30#p28"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It is through covenants that we become yoked with the Savior Jesus Christ and our burdens become lighter."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The baptismal covenant is the first covenant we make with God. We then make a new covenant with Him each week as we partake of the sacrament during our Sunday worship wherein we renew promises made at baptism and covenant to always remember the Savior."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " Jesus Christ instituted the sacrament to help us remember Him with the promise that if we do so, we will have His Spirit with us (see "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Luke 22:19–20",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/22?lang=eng&id=p19-p20#p19"
                    },
                    {
                        "type": "text",
                        "text": "; "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "3 Nephi 18:11",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/18?lang=eng&id=p11#p11"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the sacrament prayer we have a good reminder that we do not need to be perfect to partake of the sacrament. We need to be "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "willing"
                    },
                    {
                        "type": "text",
                        "text": " to take upon us His name, remember Him, and keep His commandments, and in return we have the promise to always have His Spirit with us. The sacrament is essential to have the Spirit and the strength to continue on the covenant path."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Elder Dale G. Renlund has reminded and warned us that “the time will come, in each of your lives, when there will be a hesitation to go to church and partake of the sacrament. If it hasn’t happened yet, it will. But know this: if you follow the Savior’s direction and go and partake of the sacrament, with a broken heart and a contrite spirit, blessings will pour upon you that will keep you firm, that will keep you solid, that will keep you established on that firm foundation that is Jesus Christ.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Preach My Gospel"
                    },
                    {
                        "type": "text",
                        "text": " we also learn that “as we make our Sabbath activities compatible with God’s intent for the day, we will feel joy and peace. We will be spiritually nourished and physically refreshed.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " What a blessing it is for us to partake of the sacrament each week."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The sacrament also prepares us to make and keep temple covenants. We can draw insight about the importance and the blessings of the temple covenants as we read the account of the prophet Haggai in the Old Testament."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Lord had commanded the Israelites to rebuild the temple, but they did not make it a priority. Displeased with them, the Lord said:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Consider your ways."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Ye have sown much, and bring in little; … and he that earneth wages earneth wages to put it into a bag with holes."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Thus saith the Lord of hosts; Consider your ways."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“… Why? … Because of mine house that is waste, and ye run every man unto his own house” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Haggai 1:5–7, 9",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/hag/1?lang=eng&id=p5-p7,p9#p5"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We learn from this account that the Lord could not magnify their efforts because their actions were not aligned with God’s will. Although they were doing much, they were not accomplishing much because God’s holy house was not a priority in their lives."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As they considered their ways, they repented and followed God’s direction. As soon as they started to rebuild the temple, the Lord said, “From this day will I bless you” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Haggai 2:19",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/hag/2?lang=eng&id=p19#p19"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Blessings"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "May we also consider our ways. Heavenly Father is not asking us to physically build the temple, but He is asking us to build a strong relationship with Him and His Son, Jesus Christ, through our covenants. He will magnify our efforts as we consider our ways and make the proper adjustments to make and keep covenants with Him. God knows what is best for us and is eager to bless us. Remember what He said to the Israelites: “From this day will I bless you” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Haggai 2:19",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/hag/2?lang=eng&id=p19#p19"
                    },
                    {
                        "type": "text",
                        "text": "). I know that God keeps His promises. I have seen it in my life. He gave me spiritual and physical strength when I needed it most."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The sacrament has helped me to keep my baptismal and temple covenants. It is a weekly reminder of what the Savior Jesus Christ has done for me and how much I need Him in my life as I walk the covenant path back to His presence."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "May we consider our ways and remember the words of King Benjamin when he said: “Consider on the blessed and happy state of those that keep the commandments of God. For behold, they are blessed in all things, both temporal and spiritual; and if they hold out faithful to the end they are received into heaven, that thereby they may dwell with God in a state of never-ending happiness” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Mosiah 2:41",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng&id=p41#p41"
                    },
                    {
                        "type": "text",
                        "text": "). This is possible only as we make and keep covenants. In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "See Dallin H. Oaks, “Divine Helps for Mortality,” Liahona, May 2025, 104–6."
            },
            {
                "noteNumber": 2,
                "text": "See Guide to the Scriptures, “Humble, Humility,” Gospel Library."
            },
            {
                "noteNumber": 3,
                "text": "Dallin H. Oaks, “Divine Helps for Mortality,” 104."
            },
            {
                "noteNumber": 4,
                "text": "General Handbook: Serving in The Church of Jesus Christ of Latter-day Saints, 3.5.2, Gospel Library."
            },
            {
                "noteNumber": 5,
                "text": "See Dale G. Renlund, “Unwavering Commitment to Jesus Christ,” Liahona, Nov. 2019, 25, note 18."
            },
            {
                "noteNumber": 6,
                "text": "Dale G. Renlund, “Come unto Christ” (Brigham Young University–Idaho devotional, Sept. 26, 2017), byui.edu."
            },
            {
                "noteNumber": 7,
                "text": "Preach My Gospel: A Guide to Sharing the Gospel of Jesus Christ (2023), 88."
            }
        ]
    },
    {
        "title": "Christ-Centered Unity",
        "author": "Dieter F. Uchtdorf",
        "authorRole": "Of the Seventy",
        "kicker": "Our Savior, Jesus Christ, and our covenants are essential to guide us through the covenant path and help us overcome our challenges and weaknesses.",
        "bodySections": [
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Plan of Happiness"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "God is our Father in Heaven, and He prepared a plan for us to return to His presence. The scriptures call this the plan of salvation or “the great plan of happiness” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Alma 42:8",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/42?lang=eng&id=p8#p8"
                    },
                    {
                        "type": "text",
                        "text": "). According to this plan, “this life is the time for [us] to prepare to meet God” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Alma 34:32",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/34?lang=eng&id=p32#p32"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And God did not leave us alone in this journey. As President Dallin H. Oaks has taught, God gave us “divine helps for mortality”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " that can help us back to His presence. I will mention two of these divine helps: the Savior Jesus Christ and our covenants."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our Savior, Jesus Christ, and our covenants are essential to guide us through the covenant path and help us overcome our challenges and weaknesses. Jesus Christ knows us individually, and He will help us if we seek Him: “And if men come unto me I will show unto them their weakness. … For if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Ether 12:27",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=eng&id=p27#p27"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "According to this scripture, we need to be humble and have faith in Christ for the weak things to become strong. A central feature of humility is having a broken heart, which means to be receptive to the will of God."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " To be receptive to the will of God, we must have faith in Christ, which means that we trust Him even when we don’t have all the answers. President Oaks said: “By far, God’s strongest mortal help was His provision of a Savior, Jesus Christ, who would suffer to pay the price and provide forgiveness for repented sins. That merciful and glorious Atonement explains why faith in the Lord Jesus Christ is the first principle of the gospel.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Covenants"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We show our faith in Christ by making and keeping covenants with God. “A covenant is a sacred promise between God and His children. God gives the conditions for the covenant, and His children agree to obey those conditions. God promises to bless His children as they fulfill the covenant.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Covenants bind us to Jesus Christ because He is central to every covenant we make. In Matthew 11, the Savior extends a beautiful invitation and a promise to all of us. He said:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Come unto me, … and I will give you rest."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Take my yoke upon you, and learn of me; … and ye shall find rest unto your souls."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“For my yoke is easy, and my burden is light” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Matthew 11:28–30",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/11?lang=eng&id=p28-p30#p28"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It is through covenants that we become yoked with the Savior Jesus Christ and our burdens become lighter."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The baptismal covenant is the first covenant we make with God. We then make a new covenant with Him each week as we partake of the sacrament during our Sunday worship wherein we renew promises made at baptism and covenant to always remember the Savior."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " Jesus Christ instituted the sacrament to help us remember Him with the promise that if we do so, we will have His Spirit with us (see "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Luke 22:19–20",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/22?lang=eng&id=p19-p20#p19"
                    },
                    {
                        "type": "text",
                        "text": "; "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "3 Nephi 18:11",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/18?lang=eng&id=p11#p11"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the sacrament prayer we have a good reminder that we do not need to be perfect to partake of the sacrament. We need to be "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "willing"
                    },
                    {
                        "type": "text",
                        "text": " to take upon us His name, remember Him, and keep His commandments, and in return we have the promise to always have His Spirit with us. The sacrament is essential to have the Spirit and the strength to continue on the covenant path."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Elder Dale G. Renlund has reminded and warned us that “the time will come, in each of your lives, when there will be a hesitation to go to church and partake of the sacrament. If it hasn’t happened yet, it will. But know this: if you follow the Savior’s direction and go and partake of the sacrament, with a broken heart and a contrite spirit, blessings will pour upon you that will keep you firm, that will keep you solid, that will keep you established on that firm foundation that is Jesus Christ.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Preach My Gospel"
                    },
                    {
                        "type": "text",
                        "text": " we also learn that “as we make our Sabbath activities compatible with God’s intent for the day, we will feel joy and peace. We will be spiritually nourished and physically refreshed.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " What a blessing it is for us to partake of the sacrament each week."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The sacrament also prepares us to make and keep temple covenants. We can draw insight about the importance and the blessings of the temple covenants as we read the account of the prophet Haggai in the Old Testament."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Lord had commanded the Israelites to rebuild the temple, but they did not make it a priority. Displeased with them, the Lord said:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Consider your ways."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Ye have sown much, and bring in little; … and he that earneth wages earneth wages to put it into a bag with holes."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Thus saith the Lord of hosts; Consider your ways."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“… Why? … Because of mine house that is waste, and ye run every man unto his own house” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Haggai 1:5–7, 9",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/hag/1?lang=eng&id=p5-p7,p9#p5"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We learn from this account that the Lord could not magnify their efforts because their actions were not aligned with God’s will. Although they were doing much, they were not accomplishing much because God’s holy house was not a priority in their lives."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As they considered their ways, they repented and followed God’s direction. As soon as they started to rebuild the temple, the Lord said, “From this day will I bless you” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Haggai 2:19",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/hag/2?lang=eng&id=p19#p19"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Blessings"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "May we also consider our ways. Heavenly Father is not asking us to physically build the temple, but He is asking us to build a strong relationship with Him and His Son, Jesus Christ, through our covenants. He will magnify our efforts as we consider our ways and make the proper adjustments to make and keep covenants with Him. God knows what is best for us and is eager to bless us. Remember what He said to the Israelites: “From this day will I bless you” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Haggai 2:19",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/hag/2?lang=eng&id=p19#p19"
                    },
                    {
                        "type": "text",
                        "text": "). I know that God keeps His promises. I have seen it in my life. He gave me spiritual and physical strength when I needed it most."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The sacrament has helped me to keep my baptismal and temple covenants. It is a weekly reminder of what the Savior Jesus Christ has done for me and how much I need Him in my life as I walk the covenant path back to His presence."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "May we consider our ways and remember the words of King Benjamin when he said: “Consider on the blessed and happy state of those that keep the commandments of God. For behold, they are blessed in all things, both temporal and spiritual; and if they hold out faithful to the end they are received into heaven, that thereby they may dwell with God in a state of never-ending happiness” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Mosiah 2:41",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng&id=p41#p41"
                    },
                    {
                        "type": "text",
                        "text": "). This is possible only as we make and keep covenants. In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "See Dallin H. Oaks, “Divine Helps for Mortality,” Liahona, May 2025, 104–6."
            },
            {
                "noteNumber": 2,
                "text": "See Guide to the Scriptures, “Humble, Humility,” Gospel Library."
            },
            {
                "noteNumber": 3,
                "text": "Dallin H. Oaks, “Divine Helps for Mortality,” 104."
            },
            {
                "noteNumber": 4,
                "text": "General Handbook: Serving in The Church of Jesus Christ of Latter-day Saints, 3.5.2, Gospel Library."
            },
            {
                "noteNumber": 5,
                "text": "See Dale G. Renlund, “Unwavering Commitment to Jesus Christ,” Liahona, Nov. 2019, 25, note 18."
            },
            {
                "noteNumber": 6,
                "text": "Dale G. Renlund, “Come unto Christ” (Brigham Young University–Idaho devotional, Sept. 26, 2017), byui.edu."
            },
            {
                "noteNumber": 7,
                "text": "Preach My Gospel: A Guide to Sharing the Gospel of Jesus Christ (2023), 88."
            }
        ]
    },
    {
        "title": "God Is at Your Side",
        "author": "Andrea Muñoz Spannaus",
        "authorRole": "Second Counselor in the Young Women General Presidency",
        "kicker": "I invite you to look at your life and what you want to achieve with enthusiasm and the certainty that your Father in Heaven will guide you.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Dear young women, how crucial and important you are as members of the Church of Jesus Christ in these latter days!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When I was your age, I remember a lesson where we studied the "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "thirteenth article of faith",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/pgp/a-of-f/1?lang=eng&id=p13#p13"
                    },
                    {
                        "type": "text",
                        "text": ". When the class was over, I kept thinking about this part: “If there is anything virtuous, lovely, or of good report or praiseworthy, we seek after these things.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " I wondered what my aspirations were and what I wanted to achieve in my life. So I decided to make a list of those things—good, positive things that would bring me closer to God and would help me learn, contribute, create, and be happy. I spent that Sunday afternoon thinking and writing about the virtuous and good things I wanted to have happen in my life."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Today I invite you to look at your life and what you want to achieve with enthusiasm and the certainty that your Father in Heaven will guide you on that journey and show you "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "the best way"
                    },
                    {
                        "type": "text",
                        "text": " to make the righteous desires of your heart come true."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I want to illustrate this concept with an experience. On my way to the dentist, I put the address in my phone. While I was driving on the freeway, the GPS thought I was on a parallel street and kept telling me to turn right—when there was no place to turn. Finally, I pulled off the freeway and called my husband for help. When I gave him my exact location, he was able to guide me to the place I wanted to go."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Dear young women, the Lord knows where you are; He has your exact location and can guide you. He knows your dreams and your gifts. He knows when you feel alone and what your questions are. He knows your challenges and how to turn your weaknesses into strengths."
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " He knows everything. And knowing everything about you does not make Him love you less."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Once a young man came running, kneeling before Jesus Christ, and asking Him, “What can I do to gain eternal life?” The young man said he had always obeyed the commandments. Would Jesus know what else this young man could do? Of course! But "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "before"
                    },
                    {
                        "type": "text",
                        "text": " He tells him, look at what happened. In "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Mark 10:21",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/mark/10?lang=eng&id=p21#p21"
                    },
                    {
                        "type": "text",
                        "text": ", we read, “Jesus beholding him "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "loved"
                    },
                    {
                        "type": "text",
                        "text": " him.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Can you imagine those moments when Jesus looks at this young man? A look that conveys only love: love of the highest quality. Only "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "after"
                    },
                    {
                        "type": "text",
                        "text": " transmitting that love did He tell him what he could do to improve."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our Father and our Savior know you and have the same perfect love for you. Part of that love and mercy is giving us many opportunities and being patient as we learn and work on our list of aspirations."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Dear young women, I testify that you are "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "beloved"
                    },
                    {
                        "type": "text",
                        "text": " daughters of heavenly parents, with a "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "divine"
                    },
                    {
                        "type": "text",
                        "text": " nature and an "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "eternal"
                    },
                    {
                        "type": "text",
                        "text": " destiny."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " Each of you has a "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "crucial and important work"
                    },
                    {
                        "type": "text",
                        "text": " to do here on earth."
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " That work is different for each person, but if you choose to love God and Jesus Christ and to trust Them, doing that work will bring you the same great joy."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I would like to share seven ways that will help you in this endeavor. I invite you to listen to the Spirit to choose one to focus on over the next few weeks."
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "Partake of the sacrament with a humble heart, grateful for the promise that as you keep your covenants, the Holy Ghost will be your constant companion. Begin each day by asking the Father for that companionship."
                            },
                            {
                                "type": "note",
                                "noteNumber": "8"
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "Repent daily and at the end of the day, as you pray, ask for forgiveness."
                            },
                            {
                                "type": "note",
                                "noteNumber": "9"
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "Study the scriptures with a desire to know God’s character so you can do His will, increase your love for Him, and advance His work."
                            },
                            {
                                "type": "note",
                                "noteNumber": "10"
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "Study what it means to have ministering angels help you."
                            },
                            {
                                "type": "note",
                                "noteNumber": "11"
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "Protect your sleep; go to bed early. Get enough sleep to keep your mind clear and alert."
                            },
                            {
                                "type": "note",
                                "noteNumber": "12"
                            },
                            {
                                "type": "text",
                                "text": " When we sleep, the brain performs vital functions to work properly."
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "Limit cell phone use. Social media makes us believe we are connected; however, it is a thief of our peace of mind, self-esteem, and the real connection that makes us feel loved, accepted, heard, and valued when spending time face to face with others."
                            },
                            {
                                "type": "note",
                                "noteNumber": "13"
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "And number seven is an invitation from our prophet, President Dallin H. Oaks: “Seek friends … who are striving to follow the Lord … with whom you can feel the Spirit and … reinforce your faith.”"
                            },
                            {
                                "type": "note",
                                "noteNumber": "14"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A few years ago, we had recently moved from Argentina to the United States, and I was learning English. (I am still learning!) At that time, my calling involved teaching. That day I felt everything I said had been wrong, that I had mispronounced words and made many grammatical errors—that it had been a complete disaster! I felt depressed, as if I were in a black cloud. I wondered why God had given me this calling if I couldn’t even speak! I was confused and didn’t see a way out. That night I went to sleep in tears, hoping I would feel better in the morning. But in the morning, I woke up feeling the same."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Then my husband gave me a priesthood blessing, and "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "in that moment"
                    },
                    {
                        "type": "text",
                        "text": ", I felt the heavens open. In the blessing, I was told, “Satan wants to destroy your self-esteem, your mind, your thoughts, and your spirit.” And then I received these words: “But the Father, Jesus Christ, and the Holy Ghost are at your side.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Dear young women, I testify that the Lord has greater power than the enemy. He knows where you are and has promised to lead you by the hand."
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " Always put Him first and remain faithful to the covenants you made at your baptism. Angels can minister to you. The Father, Jesus Christ, and the Holy Ghost are at your side."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I invite you to study the "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "thirteenth article of faith",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/pgp/a-of-f/1?lang=eng&id=p13#p13"
                    },
                    {
                        "type": "text",
                        "text": " and to create your own list of aspirations. I express my love for you and my confidence in all the beautiful things you will achieve in your lives. In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Articles of Faith 1:13."
            },
            {
                "noteNumber": 2,
                "text": "See Isaiah 48:17."
            },
            {
                "noteNumber": 3,
                "text": "See Ether 12:27."
            },
            {
                "noteNumber": 4,
                "text": "Mark 10:21, emphasis added; see also Mark 10:17–20."
            },
            {
                "noteNumber": 5,
                "text": "See “Young Women Theme,” Gospel Library."
            },
            {
                "noteNumber": 6,
                "text": "“You have an important place in His Church. Jesus Christ will help you fulfill His purposes for you” (“Message from the First Presidency,” For the Strength of Youth: A Guide for Making Choices [2025], 2)."
            },
            {
                "noteNumber": 7,
                "text": "Our Heavenly Father invites all of us to assist in His work of bringing to pass the eternal life of His children (see Moses 1:39; General Handbook: Serving in The Church of Jesus Christ of Latter-day Saints, 1.2, Gospel Library). He also blesses us with specific responsibilities within His work. President Dieter F. Uchtdorf explained: “The Lord gave you your responsibilities for a reason. There may be people and hearts only you can reach and touch. Perhaps no one else could do it in quite the same way” (“Lift Where You Stand,” Liahona, Nov. 2008, 56)."
            },
            {
                "noteNumber": 8,
                "text": "See For the Strength of Youth, 23; Doctrine and Covenants 84:20: “Therefore, in the ordinances [of the priesthood], the power of godliness is manifest.”"
            },
            {
                "noteNumber": 9,
                "text": "“Persons who have this remission of sins—and then regularly renew their cleansing by daily repentance and living according to the covenants they make through the ordinance of the sacrament—qualify for the promise that the Holy Ghost, the Spirit of the Lord, ‘may always … be with them’ (Doctrine and Covenants 20:77)” (Dallin H. Oaks, “Divine Helps for Mortality,” Liahona, May 2025, 105)."
            },
            {
                "noteNumber": 10,
                "text": "“Become an engaged learner. Immerse yourself in the scriptures to understand better Christ’s mission and ministry. Know the doctrine of Christ so that you understand its power for your life. Internalize the truth that the Atonement of Jesus Christ applies to you. …"
            },
            {
                "noteNumber": 11,
                "text": "See Doctrine and Covenants 13:1; Dallin H. Oaks, “The Aaronic Priesthood and the Sacrament,” Liahona, Jan. 1999, 43–46."
            },
            {
                "noteNumber": 12,
                "text": "See Doctrine and Covenants 88:124."
            },
            {
                "noteNumber": 13,
                "text": "See For the Strength of Youth, 24."
            },
            {
                "noteNumber": 14,
                "text": "Dallin H. Oaks, “Coming Closer to Jesus Christ” (Brigham Young University devotional, Feb. 10, 2026), speeches.byu.edu."
            },
            {
                "noteNumber": 15,
                "text": "See Isaiah 41:13; Doctrine and Covenants 112:10."
            }
        ]
    },
    {
        "title": "“Prove Me Now Herewith”",
        "author": "Moisés Villanueva",
        "authorRole": "Of the Seventy",
        "kicker": "Sometimes we expect the Lord’s blessings to come the way we would wish, rather than in His own way and timing.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When I was 10 years old, my family and I were baptized as members of The Church of Jesus Christ of Latter-day Saints. Entering the covenant path brought some profound changes to our lives. I had never attended any church before. I now understand that those changes reflected our sincere efforts to apply the doctrine of Jesus Christ in our lives."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Perhaps the change that required the greatest faith and sacrifice was to honorably pay a full tithe."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Those were difficult years financially. My mother had separated from my father and worked tirelessly to provide for our family. Supporting eight children—most of us still very young—was no easy task. Yet when the missionaries taught us the law of tithing, my mother chose to trust the Lord’s promise as recorded by Malachi: “Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Malachi 3:10",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/mal/3?lang=eng&id=p10#p10"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Lord taught this important principle:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“There is a law, irrevocably decreed in heaven before the foundations of this world, upon which all blessings are predicated—"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“And when we obtain any blessing from God, it is by obedience to that law upon which it is predicated” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Doctrine and Covenants 130:20–21",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/130?lang=eng&id=p20-p21#p20"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I bear witness to this great truth."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the Lord declared, “Who am I, saith the Lord, that have promised and have not fulfilled?” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Doctrine and Covenants 58:31",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58?lang=eng&id=p31#p31"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Sometimes we expect the Lord’s blessings to come the way we would wish, rather than in His own way and timing."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "After a sacrament meeting, a faithful sister shared that her testimony of the law of tithing had begun to weaken. She explained that although she had always paid a full tithe, she had never received the job promotion she had hoped for nor even the salary increase she deserved."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The counsel I gave her is the same counsel I share with you today."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In his address “"
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "The Windows of Heaven",
                        "href": "https://www.churchofjesuschrist.org/study/general-conference/2013/10/the-windows-of-heaven?lang=eng&id=p5#p5"
                    },
                    {
                        "type": "text",
                        "text": ",” Elder David A. Bednar taught, “As we live the law of tithing, we often receive significant but subtle blessings that are not always what we expect and easily can be overlooked” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Liahona"
                    },
                    {
                        "type": "text",
                        "text": ", Nov. 2013, 17)."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Elder Bednar’s words prompted me to make a list of the blessings I have received through faithfully paying my tithing. The Holy Ghost helped me recognize many blessings:"
                    }
                ]
            },
            {
                "type": "ul",
                "items": [
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "I have enjoyed steady employment for many years."
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "My wife, my children, and I have been blessed with good health."
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "Our home and temporal possessions have been preserved, even during difficult times."
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "The Lord has blessed me with the ability to manage my time and resources so I could obtain an education."
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "I have developed the gift of gratitude by learning to appreciate the Lord’s hand in each of His tender mercies."
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "type": "text",
                                "text": "I have learned to recognize the influence of the Holy Ghost when making important decisions in my life."
                            }
                        ]
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "These blessings, both temporal and spiritual—and many others—are evidence that the Lord has indeed opened the windows of heaven and poured out His promised blessings in abundance. I invited that sister to write her own list of the significant yet subtle blessings the Lord had given her—blessings that are often easy to overlook."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Later I heard another faithful sister share in a sacrament meeting that the 20-liter (5-gallon) propane tank in her home had lasted far longer than she had expected. It almost seemed as though it would never run out. She knew this was one of the Lord’s tender mercies for paying an honorable tithing."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I was reminded of the Lord’s words to the children of Israel: “And I have led you forty years in the wilderness: your clothes are not waxen old upon you, and thy shoe is not waxen old upon thy foot” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Deuteronomy 29:5",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/deut/29?lang=eng&id=p5#p5"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Have you ever asked yourselves whether the Lord has caused your personal possessions to last longer because you have faithfully lived the law of tithing?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I have seen those subtle blessings many times in my own life."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When I think of my mother’s faith during those difficult years, I also think of the widow of Zarephath."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Lord told Elijah, “Arise, get thee to Zarephath … : behold, I have commanded a widow woman there to sustain thee” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "1 Kings 17:9",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/17?lang=eng&id=p9#p9"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Elijah found the widow gathering sticks. He asked her for some water and for a morsel of bread. She explained that she had only a handful of meal and a little oil—enough to prepare one final meal for herself and her son and then die."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Elijah then said, “Fear not; go and do as thou hast said: but make me thereof a little cake first, and bring it unto me, and after make for thee and for thy son” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "1 Kings 17:13",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/17?lang=eng&id=p13#p13"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He promised that her barrel of meal would not be exhausted and her cruse of oil would not fail until the Lord sent rain upon the earth."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "She “did according to the saying of Elijah” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "1 Kings 17:15",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/17?lang=eng&id=p15#p15"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Elijah understood that blessings "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "will"
                    },
                    {
                        "type": "text",
                        "text": " come after the trial of our faith. The widow trusted in "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "Elijah’s"
                    },
                    {
                        "type": "text",
                        "text": " words and offered up all that she had (see also "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Mark 12:41–44",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/mark/12?lang=eng&id=p41-p44#p41"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Then the Lord’s promise was fulfilled: “And the barrel of meal wasted not, neither did the cruse of oil fail, according to the word of the Lord, which he spake by Elijah” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "1 Kings 17:16",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/1-kgs/17?lang=eng&id=p16#p16"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I am especially grateful that my mother trusted the Lord’s promises and chose to live the law of tithing regardless of our difficult circumstances."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I bear my testimony that God is our loving Heavenly Father. He knows each of us and is aware of our needs even before we ask (see "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Matthew 6:8",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/6?lang=eng&id=p8#p8"
                    },
                    {
                        "type": "text",
                        "text": "). I testify that Jesus Christ is the Son of the living God and that He directs His Church today. He gives us commandments because He wants us to receive His blessings."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When we live the law of tithing, the Lord indeed opens the windows of heaven and pours out His promised blessings “that there shall not be room enough to receive it” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Malachi 3:10",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/mal/3?lang=eng&id=p10#p10"
                    },
                    {
                        "type": "text",
                        "text": "). I so testify in the sacred name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": []
    },
    {
        "title": "Sealed by the Holy Spirit of Promise",
        "author": "David A. Bednar",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Receiving priesthood ordinances and entering into sacred covenants are essential steps in the “quest of a lifetime” to align our hearts, minds, and lives with God’s will.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I learned a vital lesson many years ago from President Boyd K. Packer. He said:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“No matter what citizenship or race, whether male or female, no matter what occupation, no matter your education, regardless of the generation in which one lives, life is a homeward journey for all of us, back to the presence of God."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Ordinances and covenants become our credentials for admission into His presence. To worthily receive them is "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "the quest of a lifetime"
                    },
                    {
                        "type": "text",
                        "text": "; to keep them thereafter is "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "the challenge of mortality"
                    },
                    {
                        "type": "text",
                        "text": ".”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I pray the Holy Ghost will instruct and enlighten each of us as we consider the importance of ordinances and covenants as spiritual credentials for our journey home to Heavenly Father."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Parable of the Passport"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I begin with a short story. Once a man wanted to visit family members in a distant country. He planned his trip, packed his suitcase, and traveled by airplane to the city where his relatives lived."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The man excitedly exited the airplane and walked to the passport control checkpoint. He had a valid passport issued by an authorized agency of his country’s government. He presented his passport to a border official, who verified the man’s identity, nationality, and reasons for visiting the country. But the man had not taken good care of his passport. The personal information page had been stained and damaged. And a ripped page had been repaired in an unauthorized manner with tape and glue."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Consequently, the border official rejected his passport and refused to provide the stamp necessary for him to enter the country. The man was disappointed and perplexed about what he should do next."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The lesson of this story is quite simple: the integrity of a passport must be maintained over time. Holding a valid passport provided the "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "opportunity"
                    },
                    {
                        "type": "text",
                        "text": " for the man to enter the country, but the passport alone did not "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "guarantee"
                    },
                    {
                        "type": "text",
                        "text": " he actually would be allowed to enter the country."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Of course, this simple analogy has limitations. Unlike damage to a physical passport, the adversities and afflictions we experience through no fault of our own do not diminish God’s promises to us or invalidate our covenants."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Covenants, Ordinances, and Promised Blessings"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For disciples of Jesus Christ, receiving priesthood ordinances and entering into sacred covenants are essential steps in the "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "“quest of a lifetime”"
                    },
                    {
                        "type": "text",
                        "text": " to align our hearts, minds, and lives with God’s will."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A covenant is a solemn promise—an enduring commitment between God and His sons and daughters."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " God establishes the conditions of all gospel covenants, and His children exercise their moral agency to learn about and consent to what He asks them to do."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Covenants are received through sacred ordinances. An ordinance is a holy act performed by the authority of the priesthood that has spiritual purpose and eternal significance and is related to God’s laws and statutes. Ordinances also teach us about the nature of the covenants we accept in our lives."
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The covenants and ordinances of the Savior’s restored gospel are spiritual credentials that can open wide the heavenly windows of opportunity to receive in our lives divine purpose, direction, and strength. God promises His sons and daughters supernal blessings for honoring covenants, including obedience to the laws and ordinances of the gospel of Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " Ongoing faithfulness is required for those credentials to be valid and for promised blessings to be received."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Holy Ghost Is the Holy Spirit of Promise"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Holy Ghost is the third member of the Godhead. He is a personage of spirit, testifies of all truth, and is the witness of and messenger for the Father and the Son."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Holy Ghost is also described in scripture as the Holy Spirit of Promise, who ratifies or confirms as acceptable to God the righteous acts of His children."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " Ultimately, all gospel ordinances and covenants must be sealed by the Holy Spirit of Promise. As the Lord revealed to the Prophet Joseph Smith, “All covenants … not made and entered into and sealed by the Holy Spirit of promise … are of no efficacy, virtue, or force in and after the resurrection from the dead.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When sealed by the Holy Spirit of Promise, an ordinance, vow, or covenant is binding on earth and in heaven. This sealing is conditional in mortality and can be broken or forfeited through unrighteousness."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Receiving this ratifying sealing by the Holy Ghost typically is not a one-time event; rather, it comes over time"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " as we repent sincerely and consistently, honor our covenants, and yield our hearts unto God. Righteously seeking for this blessing is "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "“the challenge of mortality,”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " as described by President Packer."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Just as the man in my passport story needed an authorized stamp in his passport to enter a foreign country, so each of us needs the verifying witness of the Holy Spirit of Promise in order for us to receive the eternal blessings associated with the covenants and ordinances of the Savior’s gospel."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Each of us should ever be grateful for sacred "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "opportunities"
                    },
                    {
                        "type": "text",
                        "text": " to “walk in all the ordinances of the Lord”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " and to receive by the Holy Spirit of Promise, “in process of time,”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " the ratifying seal that "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "guarantees"
                    },
                    {
                        "type": "text",
                        "text": " all promised blessings."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Sealing Ordinance"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The sealing of a man and a woman in the house of the Lord is a crowning covenant and ordinance of the Savior’s restored gospel. And importantly, understanding the doctrinal importance of a sealing ordinance being sealed by the Holy Spirit of Promise helps to address, in part, deeply personal questions about whether another person’s choices can deprive a faithful covenant keeper of eternal blessings."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The sealing ordinance includes two fundamental and related parts: (1) the eternal union of a man and a woman in marriage—what may be understood as a lateral sealing—and (2) the sealing of the husband and wife into God’s eternal family and the linking of humankind through all generations—what may be understood as a vertical sealing."
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " Both elements of the ordinance are vital."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The intended and prayed-for outcomes of a temple sealing between a man and a woman include a lifetime of spiritual growth, marital devotion, fidelity, working together to overcome the uncertainties and challenges of mortality, and enduring happiness."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Sometimes, unfortunately, the intended and prayed-for outcomes do not happen. A spouse’s sins, infidelity, personal apostasy, or other difficulties may cause contention, alienation, and even divorce. In these cases, a faithful spouse may ask, “Can the unrighteous exercise of moral agency by another person rob me of what God has promised?” The answer to this question is an emphatic no!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The unworthy actions of a spouse certainly bring heartache and sorrow to the other spouse and family members. However, unrighteousness by one person cannot hinder or thwart the flow of God’s love, strength, and blessings to another person. The power of the Lord’s infinite and eternal Atonement can overcome all things, all the time, everywhere, for every person who holds fast to their covenants with Him."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A spouse who violates covenants and does not repent relinquishes the opportunity to receive for himself or herself the ratifying seal of the Holy Spirit of Promise for both the lateral and vertical aspects of the sealing ordinance."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A faithful spouse who honors covenants and presses forward in faith remains worthy to receive for himself or herself the ratifying seal of the Holy Spirit of Promise for the vertical aspect of the sealing ordinance and to receive all other associated individual blessings."
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "You may ask, “How can this be the case if a temple marriage does not endure?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The revealed doctrine of The Church of Jesus Christ of Latter-day Saints does not address all details of and nuances about such cases. I do not know and cannot explain precisely how and when promised blessings are received. But I do know promised blessings will be received."
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " No faithful disciple will ultimately be deprived of any eternal blessing God has promised because of another individual’s unrighteous exercise of moral agency."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I conclude with the reassuring testimony of King Benjamin: “I would desire that ye should consider on the blessed and happy state of those that keep the commandments of God. For behold, they are blessed in all things, both temporal and spiritual; and if they hold out faithful to the end they are received into heaven, that thereby they may dwell with God in a state of never-ending happiness. O remember, remember that these things are true; for the Lord God hath spoken it.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I joyfully testify to the truthfulness of King Benjamin’s prophetic promise in the sacred name of the Lord Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Boyd K. Packer, “Covenants,” Ensign, May 1987, 24; emphasis added."
            },
            {
                "noteNumber": 2,
                "text": "See Boyd K. Packer, “Covenants,” 23."
            },
            {
                "noteNumber": 3,
                "text": "See Guide to the Scriptures, “Ordinances,” Gospel Library."
            },
            {
                "noteNumber": 4,
                "text": "See Guide to the Scriptures, “Covenant,” Gospel Library."
            },
            {
                "noteNumber": 5,
                "text": "See Guide to the Scriptures, “Holy Spirit of Promise,” Gospel Library."
            },
            {
                "noteNumber": 6,
                "text": "Doctrine and Covenants 132:7."
            },
            {
                "noteNumber": 7,
                "text": "See Moses 7:21."
            },
            {
                "noteNumber": 8,
                "text": "Boyd K. Packer, “Covenants,” 24; emphasis added."
            },
            {
                "noteNumber": 9,
                "text": "Doctrine and Covenants 136:4."
            },
            {
                "noteNumber": 10,
                "text": "Moses 7:21."
            },
            {
                "noteNumber": 11,
                "text": "President Russell M. Nelson taught: “A husband and wife make a covenant with God and with each other to be loyal and faithful to each other. … Just as marriages and families share a unique lateral bond that creates a special love, so does the new relationship formed when we bind ourselves by covenant vertically to our God!” (“The Everlasting Covenant,” Liahona, Oct. 2022, 6, 9)."
            },
            {
                "noteNumber": 12,
                "text": "These blessings are set forth in the covenant received through the marriage sealing ordinance. “While a sealing remains in place, a member who is faithful to temple covenants will receive the personal blessings promised in the temple. This is true even if the person’s spouse has broken the covenants or withdrawn from the marriage. Moreover, God will not require anyone to remain in a sealed relationship throughout eternity against his or her will. Heavenly Father will ensure that each person receives every blessing that his or her desires and choices allow” (General Handbook: Serving in The Church of Jesus Christ of Latter-day Saints, 38.4.1.10, Gospel Library)."
            },
            {
                "noteNumber": 13,
                "text": "The Lord Jesus Christ has declared: “My words are sure and shall not fail. … But all things must come to pass in their time” (Doctrine and Covenants 64:31–32)."
            },
            {
                "noteNumber": 14,
                "text": "Mosiah 2:41."
            }
        ]
    },
    {
        "title": "Jesus Christ Is the Light and Life of the World",
        "author": "Thabo Lebethoa",
        "authorRole": "Of the Seventy",
        "kicker": "Whatever concerns, challenges, and struggles we may have in our lives, the answer is always Jesus Christ.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In my home country of South Africa, it is customary for parents to give their children names with special meaning. My name is Thabo. It means “joy.” My beloved wife’s middle name is Gadifele. It means “eternal or endless.” Put together, our names mean “eternal joy.” What an expectation!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "But shortly after we were married, a discussion one evening unexpectedly turned into our first serious disagreement. It quickly escalated into an argument, and we went from being a cheerful, happy couple to giving each other the silent treatment in a selfish state of quiet desperation."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Many of us have experienced such moments when a conversation or discussion with a spouse, a child, a family member, a friend, a colleague, or a neighbor did not end as we hoped. In such moments, what may have begun as a simple exchange may leave us with feelings of anger, disappointment, frustration, or even regret."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Whilst I was pondering about what to do, the words Jesus Christ spoke when He appeared to the people of Nephi in the Book of Mormon came to mind. He taught:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“For verily, verily I say unto you, he that hath the spirit of contention is not of me, but is of the devil, who is the father of contention, and he stirreth up the hearts of men to contend with anger, one with another."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“Behold, this is "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "not"
                    },
                    {
                        "type": "text",
                        "text": " my doctrine, to stir up the hearts of men with anger, one against another; but this is my doctrine, that such things should be done away” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "3 Nephi 11:29–30",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/11?lang=eng&id=p29-p30#p29"
                    },
                    {
                        "type": "text",
                        "text": "; emphasis added)."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ Is the Light and Life of the World"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "These words from the scriptures enlightened my mind and helped me know how to resolve the challenge I was facing. This enlightenment comes from the Savior. In "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "3 Nephi 11:11",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/11?lang=eng&id=p11#p11"
                    },
                    {
                        "type": "text",
                        "text": ", the Savior said, “I am the "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "light and the life"
                    },
                    {
                        "type": "text",
                        "text": " of the world” (emphasis added). Through His Spirit, He enlightens our minds (see "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Doctrine and Covenants 6:15",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/6?lang=eng&id=p15#p15"
                    },
                    {
                        "type": "text",
                        "text": "). His light is also revealed through His perfect life and teachings. He declared, “I am the light; I have set an example for you” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "3 Nephi 18:16",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/18?lang=eng&id=p16#p16"
                    },
                    {
                        "type": "text",
                        "text": "), and His words are “a light unto [our] path” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Psalm 119:105",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/ot/ps/119?lang=eng&id=p105#p105"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "How Can We Receive More of the Savior’s Light in Our Lives?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Many of us may wonder how we can receive more of the Savior’s light as we navigate through the daily challenges and struggles in our lives. We may be concerned about becoming self-reliant; meeting the demands placed upon us at school or at work; feeling inadequacy, fear, and doubt; dealing with the loss of a loved one; or simply knowing what to do with our lives. Whatever concerns, challenges, and struggles we may have in our lives, the answer is always Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Jesus Christ can bring light in our moments of darkness and restore hope where there is hopelessness. He knows where we have been, where we are, and where we need to be. Through Him, today can be a new day and tomorrow can be a better day."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Here are some things we can do to increase the Savior’s light in our lives."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H3",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, Increase Our Faith in the Lord Jesus Christ"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Having faith in Jesus Christ means trusting that He understands our daily difficulties and knows how to help us rise above them because He has experienced all our pains, afflictions, and infirmities (see "
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Alma 7:11–12",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/7?lang=eng&id=p11-p12#p11"
                    },
                    {
                        "type": "text",
                        "text": "). We need to trust that He is always ready to help us as we remember to “look unto [Him] in every thought” and “doubt not, fear not” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Doctrine and Covenants 6:36",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/6?lang=eng&id=p36#p36"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the October 2024 general conference, President Dieter F. Uchtdorf taught: “Strong faith in Jesus Christ doesn’t happen overnight. No, in this mortal world, it’s the thorns and thistles of doubt that grow spontaneously. The healthy, fruitful tree of faith requires intentional effort” (“"
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Nourish the Roots, and the Branches Will Grow",
                        "href": "https://www.churchofjesuschrist.org/study/general-conference/2024/10/51uchtdorf?lang=eng&id=p_gJx5N#p_gJx5N"
                    },
                    {
                        "type": "text",
                        "text": ",” "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Liahona"
                    },
                    {
                        "type": "text",
                        "text": ", Nov. 2024, 102)."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks in an address to BYU students taught that “strong faith requires more than strong desire. It means daily trying, one step at a time, with prayer and scripture study” (“"
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Coming Closer to Jesus Christ",
                        "href": "https://speeches.byu.edu/talks/dallin-h-oaks/coming-closer-to-jesus-christ"
                    },
                    {
                        "type": "text",
                        "text": "” [Brigham Young University devotional, Feb. 10, 2026], 2, speeches.byu.edu)."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H3",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Second, Study the Scriptures Daily, Especially the Book of Mormon"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Preach My Gospel"
                    },
                    {
                        "type": "text",
                        "text": ", we learn, “As people read and pray about the Book of Mormon, they will come to know the Savior better and experience His love” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Preach My Gospel: A Guide to Sharing the Gospel of Jesus Christ",
                        "href": "https://www.churchofjesuschrist.org/study/manual/preach-my-gospel-2023/13-chapter-5?lang=eng&id=p45#p45"
                    },
                    {
                        "type": "text",
                        "text": " [2023], 115)."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "There is no single right way to study the scriptures. We may choose to read chronologically, study by topic, focus on a particular question, or begin with a passage or verse that draws our attention. We may also choose a time that best fits our circumstances. Ultimately, the method, timing, and length of our scripture study matter less than the consistency and sincerity of our effort."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Whilst we were serving as mission leaders in our home country, one of our missionaries shared a story of a man they were teaching who, after reading the Book of Mormon, took a shovel, dug a hole in his garden, emptied a newly purchased large tin of coffee into it, and buried it. The man was enlightened by the Spirit on the changes he needed to make and acted upon it. We too can receive enlightenment as we study our scriptures."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H3",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Third, Practice Repentance Daily"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Repentance means a change of mind and a turning of the heart to God. Let us ponder about the changes that we need to make in our lives, and these may include how we use our time, the things we watch or listen to, and the language and tone we use as we communicate with others. Perhaps we can begin by asking ourselves what is it that we need to change in our lives. It is important to remember that we do not need to go through this alone. The Savior is always ready to help because He sees the end from the beginning and understands our weaknesses perfectly; He is always ready “to succor his people according to their infirmities” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Alma 7:12",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/7?lang=eng&id=p12#p12"
                    },
                    {
                        "type": "text",
                        "text": ")."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Sister Tamara W. Runia taught that “the invitation to repent is an expression of God’s love. Saying yes to that invitation is an expression of ours” (“"
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Your Repentance Doesn’t Burden Jesus Christ; It Brightens His Joy",
                        "href": "https://www.churchofjesuschrist.org/study/general-conference/2025/04/43runia?lang=eng&id=p_nUqQl#p_nUqQl"
                    },
                    {
                        "type": "text",
                        "text": ",” "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Liahona"
                    },
                    {
                        "type": "text",
                        "text": ", May 2025, 91)."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I testify that today can be a new day and tomorrow will be a better day for all who come unto Jesus Christ and receive His light in their lives. He lovingly beckons, “Come unto me, … and I will give you rest” ("
                    },
                    {
                        "type": "element",
                        "nodeName": "A",
                        "innerText": "Matthew 11:28",
                        "href": "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/11?lang=eng&id=p28#p28"
                    },
                    {
                        "type": "text",
                        "text": "). In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": []
    },
    {
        "title": "Quick to Help, Slow to Judge",
        "author": "Paul H. Sinclair",
        "authorRole": "Of the Seventy",
        "kicker": "Being quick to help and slow to judge is a simple and deeply encouraging way for each of us to be more like our Savior.",
        "bodySections": [
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Parable of the Baffling Buttons"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "“And a little child shall lead them.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " Some years ago, this scripture truly came alive to me. It happened during a ward Primary program."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "That Sabbath morning, my young friend James was wearing a new suit."
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " As the program began, James was examining some of the more interesting aspects of his new suit. What most captured his attention were two features of his jacket. On his jacket sleeves there were buttons but no holes. And on the left lapel of his jacket there was a buttonhole but no buttons. Neither the buttons nor the buttonhole seemed to be serving any real purpose."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Well, James cleverly devised a purpose for both. I anxiously watched as James delightedly buttoned his right sleeve to his left jacket lapel. Being pleased with himself quickly gave way to being panicked, because once James had buttoned his arm to his chest, even with the flexibility of a Primary child, he could not get himself loose. James had unintentionally, but quite successfully, created a one-arm straitjacket."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As James became more and more stuck, I became more and more aggravated. Baffling buttons had been put to an uncomfortable and, to me, irritating purpose. I was shaking my head in disappointment as James was about to go to the pulpit."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Just then I noticed the little girl sitting next to James. She had also witnessed James’s predicament and his growing concern. But instead of being aggravated, she wanted to help. Quickly discerning what action was needed, she reached up with her tiny, nonjudgmental fingers and popped the button out of the buttonhole. James was rescued, and the Primary program was saved!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I felt relieved but also humbled. I recognized the quiet rebuke of a misplaced button and tiny fingers reminding me that I should be trying to be more like Jesus."
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " That small but majestic moment"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " helped me embrace what Elder Patrick Kearon has described as “a radical reorientation” of my soul."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " I don’t recall the topic of the Primary program that day, but the message I received through the Holy Ghost prompted a spiritual realignment. A little child led me to learn this: that a true disciple of Jesus Christ is quick to help and slow to judge."
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Savior Helps (and Does Not Judge) the Woman at the Well"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Savior taught this loving principle of discipleship from the very beginning of His mortal ministry. In the Gospel of John, He ministers to a Samaritan woman."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " We do not know her name. We have come to know her as “the woman at the well.” Her interaction with the Lord Jesus Christ teaches many lessons. One critical lesson is the example of the Savior being quick to offer grace and transformative help."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the conversation opened, Jesus was weary and unexpectedly"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " asked the woman for a drink."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " We can only imagine how many days this woman had been coming to this well at this hour, alone—until this day."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    },
                    {
                        "type": "text",
                        "text": " To her, it was an ordinary day—until Jesus showed up. In her ordinary days, she may have endured many judging eyes but few helping hands—until this day."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "This woman may have done more to warrant judgment than merely buttoning her sleeve to her lapel. Apparently, she had a series of broken relationships and was, at that moment, living with a man who was not her husband. But what do we actually know about her circumstances? Was she widowed? divorced? abandoned? We do not know. Now, please don’t misunderstand me. Her story is very important, but these are not the judgmental details "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "we"
                    },
                    {
                        "type": "text",
                        "text": " need to know about "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "her"
                    },
                    {
                        "type": "text",
                        "text": " journey."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "What did Christ focus on instead? Help. The offer of “living water.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " The Great Redeemer of all knew absolutely everything about this unnamed woman, and He came to "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "her"
                    },
                    {
                        "type": "text",
                        "text": " to be a living witness of living water. He offered her grace and transformative help."
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "He spoke to the woman with dignity, not shame. He earnestly listened to her questions and responded with teaching, not ridicule. He did not hold her hostage to her history. He trusted her with truth."
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " Jesus Christ reminds us that to help people transform their lives, we must look not only to their past—we must look to their possible."
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " She walked to the well that day as a pariah. She walked away from the well with a purpose."
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    },
                    {
                        "type": "text",
                        "text": " That is precisely what “quick to help and slow to judge” looks like."
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Showing Up on the Ordinary Days of Friends and New Members"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Every day, missionaries meet people at modern-day wells all around the world."
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " They declare that Jesus is the Christ, the great “I Am.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    },
                    {
                        "type": "text",
                        "text": " They find, teach, baptize, and confirm people who may be in fear of judgment but in need of help."
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    },
                    {
                        "type": "text",
                        "text": " As disciples of Jesus Christ, we are invited to reorient our souls so we may help friends and new members in more Christlike ways."
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " President Dallin H. Oaks has plainly and directly invited us to “seek to be holy, like our Savior.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " Being quick to help and slow to judge is a simple and deeply encouraging way for each of us to be more holy, to be more like our Savior, to be His true disciples."
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I pray that when these modern-day men and women at the well meet you and me, they will know they have “come home.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    },
                    {
                        "type": "text",
                        "text": " I pray they will recognize in you and me striving disciples of Jesus Christ, ready to fill them with living and loving water."
                    },
                    {
                        "type": "note",
                        "noteNumber": "24"
                    },
                    {
                        "type": "text",
                        "text": " I testify that when we help people, one by one, in our own small and simple ways,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "25"
                    },
                    {
                        "type": "text",
                        "text": " rather than judge them, we are preparing the world for the Second Coming of Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "26"
                    },
                    {
                        "type": "text",
                        "text": " I so witness and testify in the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Isaiah 11:6."
            },
            {
                "noteNumber": 2,
                "text": "I share this story with permission from James and his family."
            },
            {
                "noteNumber": 3,
                "text": "See “I’m Trying to Be like Jesus,” Children’s Songbook, 78–79."
            },
            {
                "noteNumber": 4,
                "text": "See Russell M. Nelson, “The Lord Jesus Christ Will Come Again,” Liahona, Nov. 2024, 121; see also Ronald A. Rasband, “Right Before Our Eyes,” Liahona, May 2025, 13–14, 17."
            },
            {
                "noteNumber": 5,
                "text": "Patrick Kearon, “God’s Intent Is to Bring You Home,” Liahona, May 2024, 88."
            },
            {
                "noteNumber": 6,
                "text": "President Dallin H. Oaks taught the following about being slow to judge others: “We must refrain from making final judgments on people because we lack the knowledge and the wisdom to do so. … The Lord’s way of final judgment will be to apply His perfect knowledge of the law a person has received and to judge on the basis of that person’s circumstances, motives, and actions throughout his or her entire life” (“‘Judge Not’ and Judging,” Ensign, Aug. 1999, 8; see also Matthew 7:1–5; Luke 6:37–42; 3 Nephi 14:1–12; Mormon 8:20). Likewise, Jesus consistently taught that helping others should be a hallmark of our discipleship (see Matthew 5:38–47; Mark 10:45; Luke 10:30–37). In the Book of Mormon, this characteristic of discipleship is taught in many passages, including the beautiful descriptions of the ways we can live the covenant we make at baptism. These passages illustrate many ways in which we help and serve others (see Mosiah 18:8–11; see also Jacob 2:17–19; Alma 1:26–27; 3 Nephi 13:1–4). Jesus Christ showed us the perfect example of helping without judging when He appeared to the Nephites and “tarr[ied] a little longer with them” (3 Nephi 17:5). Sparing any judgment, He ministered to every need and healed each wound simply because He was “filled with compassion” and “mercy” (3 Nephi 17:6, 7)."
            },
            {
                "noteNumber": 7,
                "text": "See John 4:4–42. Others who had one-by-one ministering conversations with the Savior in the New Testament include the rich young ruler (see Matthew 19:16–22), the thief on the cross (see Luke 23:39–43), Nicodemus (see John 3:1–21), the man at the pool of Bethesda (see John 5:2–15), Pontius Pilate (see John 18:33–38), Mary Magdalene (see John 20:11–18), and Simon Peter (see John 21:15–19). Powerfully, in the Book of Mormon, Jesus Christ touched His disciples “one by one” and spoke to each of them personally (3 Nephi 18:36; see also 28:1–3)."
            },
            {
                "noteNumber": 8,
                "text": "By the time the Savior met the woman at the well, the cultural and religious animosity between Jews and Samaritans was entrenched. As President Dallin H. Oaks summarized it, Samaritans “belonged to a group the Jews isolated and held in contempt” (“Alive in Christ,” Liahona, May 2026, 85). Thus, it was revealing that Jesus determined that He “had to go through Samaria” (John 4:4, New International Version; emphasis added). His decision to go intentionally to Samaria and speak to a Samaritan woman was socially radical and spiritually profound. President Oaks further taught in the April 2026 general conference that being alive in Christ includes being peacemakers (see “Alive in Christ,” 85–87). How remarkable, yet completely unsurprising, that one of the early acts of the Savior’s earthly ministry was to be a peacemaker with the woman at the well."
            },
            {
                "noteNumber": 9,
                "text": "See John 4:7. This was not the last time the Savior would be weary and ask for a drink. At the end of His mortal ministry, exhausted by His suffering and hanging from the cross, Jesus again asked for a drink (see John 19:28). As we ponder Jesus Christ ministering to the woman at the well, let us also consider the coming moment when He would once again be weary and thirsty. The crucified Savior of the world would once again be quick to help and slow to judge. He would offer His life for us (see John 19:30)."
            },
            {
                "noteNumber": 10,
                "text": "There is an idiom in English and in many European languages that one should not “go to the well one too many times.” The idiom attempts to teach the principle that a person who goes too frequently to the same source of help risks depleting the value of the source until it ultimately fails (see The Free Dictionary, “go to the well too many times,” idioms.thefreedictionary.com). While the idiom is useful for describing worldly resources, it does not apply when speaking of Jesus Christ. We can never go to our own well to meet Him too many times (see Mosiah 26:30). Our effort to access Jesus Christ’s Atonement does not deplete its effectiveness, because it is infinite. Describing the glorious connection between the Atonement of Jesus Christ and the nonjudgmental help received by his brother who was dying of cancer, Bishop W. Christopher Waddell said: “Thanks to wonderful men and women who saw a need, did not judge, and ministered like the Savior, it wasn’t too late for Mike. … We must remember that it is never too late and no one has ever wandered so far from the path that he or she is beyond the reach of the infinite Atonement of Jesus Christ, which is limitless in its duration and scope” (“Just as He Did,” Liahona, May 2019, 21; emphasis added)."
            },
            {
                "noteNumber": 11,
                "text": "John 4:10."
            },
            {
                "noteNumber": 12,
                "text": "As part of His offer of help, the Savior was unafraid to invite this new disciple to accept a responsibility (see John 4:7). Though the woman did not immediately respond positively to Jesus’s request, over time and with one-on-one nurturing, the woman eventually, and joyfully, accepted the most significant of assignments: to tell the world that Jesus is the Messiah. As true followers of Jesus Christ and His example, we should be unafraid to invite people, especially new members, to serve and help others as part of their journey on the covenant path (see Mosiah 5:2; see also Dale G. Renlund, “Preserving the Heart’s Mighty Change,” Liahona, Nov. 2009, 99)."
            },
            {
                "noteNumber": 13,
                "text": "See Psalm 85:10."
            },
            {
                "noteNumber": 14,
                "text": "Heavenly Father and Jesus Christ recognize our potential to grow into the best possible version of ourselves (see Dale G. Renlund, “Personal Preparation to Meet the Savior,” Liahona, May 2025, 44)."
            },
            {
                "noteNumber": 15,
                "text": "See John 4:29. The kind of help the Savior offered did not include removing the woman from her complicated life or changing her challenging circumstances. Instead, His offer of help allowed her to walk back into her life with new purpose. David A. Bednar, then president of Brigham Young University–Idaho, taught, “As you and I come to understand and employ the enabling power of the Atonement in our personal lives, we will pray and seek for strength to change our circumstances rather than praying for our circumstances to be changed” (“In the Strength of the Lord” [Brigham Young University devotional, Oct. 23, 2001], 4, speeches.byu.edu)."
            },
            {
                "noteNumber": 16,
                "text": "We witness the consistency of divine character when we consider another woman at the well who was also in need of help rather than judgment. In Genesis 16, after a deeply emotional conflict, Hagar fled from Abram and Sarai and was alone in the wilderness. An angel appeared to Hagar as she stopped at a wellspring. After she received heavenly encouragement, understanding, and an invitation, Hagar proclaimed, “You are the God who sees me” (verse 13, New International Version). The well where the Lord searched out Hagar was named “Beer-lahai-roi,” which means “the well of Him who liveth and seeth me” (Genesis 16:14, footnote b). As we strive to be more holy in our own ministering efforts, perhaps we can emulate Hagar’s ministering angel and be the means by which someone may come to know that Heavenly Father and Jesus Christ truly see them in their wilderness."
            },
            {
                "noteNumber": 17,
                "text": "Unsurprisingly, as He interacts with the woman at the well, the Savior exemplifies what has become known as “the missionary purpose.” Chapter 1 of Preach My Gospel teaches that the missionary purpose is to “invite others to come unto Christ by helping them receive the restored gospel through faith in Jesus Christ and His Atonement, repentance, baptism, receiving the gift of the Holy Ghost, and enduring to the end” (Preach My Gospel: A Guide to Sharing the Gospel of Jesus Christ [2023], 1; emphasis added). Jesus invites the woman at the well to come unto Him and then helps her to do so."
            },
            {
                "noteNumber": 18,
                "text": "Exodus 3:14; see also John 4:26."
            },
            {
                "noteNumber": 19,
                "text": "Elder Quentin L. Cook reported that over a period of three years, nearly 900,000 people came into covenant as converts to The Church of Jesus Christ of Latter-day Saints (see “The Lord Is Hastening His Work,” Liahona, Nov. 2025, 48). At some point, each of those new members was, in his or her own way, a man or woman at the well."
            },
            {
                "noteNumber": 20,
                "text": "President Dieter F. Uchtdorf testified that encounters with Jesus Christ change us forever. He also taught that encounters with disciples of Jesus Christ should likewise transform lives (see “Encounter at the Empty Tomb,” Liahona, May 2026, 58–61)."
            },
            {
                "noteNumber": 21,
                "text": "Dallin H. Oaks, “Alive in Christ,” 87."
            },
            {
                "noteNumber": 22,
                "text": "Christlike help encourages spiritually confident discipleship. After receiving help from Jesus Christ, Peter had the confidence to leave behind his large catch of fish to follow Him (see Luke 5:11). Similarly, after experiencing the Savior’s help, the woman at the well had the confidence to leave behind her waterpot to tell everyone of the Messiah (see John 4:28)."
            },
            {
                "noteNumber": 23,
                "text": "See Clark G. Gilbert, “Come Home,” Liahona, May 2026, 15–17."
            },
            {
                "noteNumber": 24,
                "text": "President Dieter F. Uchtdorf reminded us: “‘Love one another,’ Jesus said. ‘By this all will know that you are My disciples’ [John 13:34–35, New King James Version]. Very often, a person’s first testimony of Jesus Christ comes when he or she feels love among disciples of Jesus Christ” (“By This All Will Know That You Are My Disciples,” Liahona, May 2025, 51)."
            },
            {
                "noteNumber": 25,
                "text": "President Dieter F. Uchtdorf summarized how our small, sometimes unnoticed gifts allow us to do simple things that represent the kind of help needed to change lives: “May I share with you some spiritual gifts that I have noticed in so many members across the world? Contemplate whether you have been blessed with one or more gifts like: Showing compassion. Noticing people who are overlooked. … Giving sincere compliments. … Explaining things simply. … Helping others know that they belong. … I hope you can see how precious [these gifts] are to the Lord’s work and how you might have touched, blessed, or even saved one of God’s children by your gifts” (“Do Your Part with All Your Heart,” Liahona, Nov. 2025, 23; see also Gerrit W. Gong, “No One Sits Alone,” Liahona, Nov. 2025, 40–43). In section 46 of the Doctrine and Covenants, the Lord emphasizes that the real purpose for our spiritual gifts, be they large or small, is to help Heavenly Father’s children (see Doctrine and Covenants 46:8–10, 26)."
            },
            {
                "noteNumber": 26,
                "text": "President D. Todd Christofferson taught: “Adopting the character of Christ is not only a question of our personal preparation but a primary element of preparing the world for the Lord’s return and His glorious millennial reign. We tend to underestimate the influence of Christlike individuals in the world, but working one by one has always been Jesus’s approach to changing society and establishing His kingdom” (“The Character of Christ,” Liahona, May 2026, 91)."
            }
        ]
    },
    {
        "title": "Fruit to Make One Happy",
        "author": "Gary E. Stevenson",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Gospel truths become sweet to us as we live them, bringing us happiness and joy.",
        "bodySections": [
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Introduction"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I have come to expect something when I am on the Lord’s errand. Why? Because it happens every time I travel. I meet remarkable, extraordinary people, Latter-day Saints and friends. I am always impressed with children I meet. Primary children! Everywhere, most recently in Australia, New Caledonia, Samoa, Colombia, and Peru. Sometimes you even draw our pictures, and you always improve how I look!"
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Child’s drawing of Elder Stevenson.",
                "src": "https://www.churchofjesuschrist.org/imgs/h8ij8e88fx92liyc9y0md0b6ze40rxwyu6go66bk/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When we speak in conference, we speak to everyone, but some of my message today will be more directly to you, children of Primary age. You know who you are—some watching from home and others in a Church building. As this is the last conference session, you may be tired or restless. I remember, when I was your age, my mother saying, many times, “Gary, pay attention and listen. Just one more talk.”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I know you have a purpose. “Your Heavenly Father and His Son, Jesus Christ, know you and love you.” Even though you are young, “you are an important part of Their work.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " You are some of the most valued and faithful members of the whole Church. You can help to make your homes, your communities, and even the world better. You are our future. I feel so happy when I attend Primary and listen to your talks, your answers to gospel questions, and to hear you sing. “Heavenly Father has given you talents and spiritual gifts. He wants you to use these gifts and talents to be happy and bless others.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Fruit to Make One Happy"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When I was young like you, I loved fruit—and our family tradition of buying fresh fruit from farm stands during harvest. One stand was known for its delicious peaches. They were so sweet and juicy. Somehow, apples, cherries, and apricots bought from the farmer where they were grown seemed sweeter. Here I am with my dad next to a fruit display. Even today I love seeing and tasting delicious and unique fruits from your countries."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Elder Stevenson and his father buying fruit.",
                "src": "https://www.churchofjesuschrist.org/imgs/498difxi0747mkft489i8qa8pezysiw3sp3j3s7l/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Now that we are all hungry, let us read a Book of Mormon story. Do you remember the prophet Lehi’s vision? He was drawn to a magnificent tree and its fruit. Lehi reflected, “I beheld a tree, whose fruit was desirable to make one happy.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " He exclaimed that “it was most sweet, above all that I ever before tasted.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " It filled his “soul with exceedingly great joy.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "The tree of life in Lehi’s vision.",
                "src": "https://www.churchofjesuschrist.org/imgs/346ef9ccaa2711fc04014b9dbf055800937f767c/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The tree stands for the love of God, including the greatest manifestations of that love: the birth, life, and atoning sacrifice of Jesus Christ. The fruit symbolizes blessings received through the Atonement of Jesus Christ, including ordinances, covenants, and truths of the restored gospel and ultimately eternal life."
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Fruit stand with tropical fruits.",
                "src": "https://www.churchofjesuschrist.org/imgs/ke96sqke98i925qq82rqxlmc8x93h6ndg24wn10s/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Think for a moment about your favorite fruits. Are they pineapples, bananas, and grapes? Or mangoes, strawberries, and coconuts? We can hold the fruit, feel it, and look at it. We might smell it and guess how sweet it is. But once we have tasted it, we know how much we like it. Gospel truths are the same. We learn them at home, Primary, and through the scriptures. They become sweet to us as we live them, bringing us happiness and joy. Let me share three fruits of the gospel that I love."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Children studying the scriptures.",
                "src": "https://www.churchofjesuschrist.org/imgs/511544d3fd1b0a0375aa7e7c00f254df620d6b8f/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Children of a Loving Heavenly Father"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, we are children of a loving Heavenly Father. Latter-day Saints know that we “once lived with Heavenly Father, who knows everything and loves everyone.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " We are His children. Heavenly Father knows us personally. This is your most important identity. “He wants you to be like Him! He gave you a body, abilities, and spiritual gifts. He wants you and all of His children to discover and develop these gifts. He gave us a plan to help us be happy and bless others.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " Having this knowledge makes us stronger. This knowledge also makes us kinder to others, knowing that everyone around us is our brother or sister."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Happy children outside at a park.",
                "src": "https://www.churchofjesuschrist.org/imgs/1r2tr56a3m98whwajxl9mj4a47ot0ebiwk00i3xp/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I am so grateful that you share this fruit with others when you sing our beloved song found in the "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Children’s Songbook"
                    },
                    {
                        "type": "text",
                        "text": " “I Am a Child of God.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " Recently, I conducted a devotional with members in South America. Many were suffering because of a severe earthquake they had experienced. As I invited Primary children to stand and all to sing “I Am a Child of God,” out of the congregation, an incredibly young Primary boy got away from his parents and ran right up to the stand next to me. As I swooped him up, he sang every word of the Primary song in his sweet, loud, young voice. This testimony was so important and powerful, inviting the Spirit to comfort and testify to all that we are children of a loving Heavenly Father, even in the most difficult of times."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Apostle Paul in the New Testament taught, “The Spirit itself beareth witness with our spirit, that we are the children of God.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Great Plan of Happiness Through Jesus Christ"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Second, the great plan of happiness through Jesus Christ. When I lived in Japan, I became friends with a Buddhist temple priest. He was a happy man. But when his wife died, leaving him alone, he became incredibly sad, even depressed. One night a friend and I visited him at his temple to minister to him. At first, he was reluctant to talk, so grief-stricken and inconsolable. When I asked him if he knew where his wife was, he at once lifted his head, startled at the question. “What do you mean?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We shared with him that the spirits of all men and women, when they pass away, “are taken home to that God who gave them life”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " and that in God’s loving plan for His children, the spirit of this man’s beloved wife, an honorable woman, was received into a place called the spirit world, where she could enter a state of rest, happiness, and peace."
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    },
                    {
                        "type": "text",
                        "text": " His countenance changed in that moment. It was as if we watched him partake of the fruit of the tree of life and his soul was filled “with exceedingly great joy.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " We witnessed a miraculous transformation: peace for despair, joy for sadness, hope for ashes."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Book of Mormon calls this “the great plan of happiness.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    },
                    {
                        "type": "text",
                        "text": " Central to this plan is the Atonement of Jesus Christ."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "This is why Jesus Christ is the strength of youth. “He has done everything necessary for you”—for us—“to have joy in this life and forever.” Even when we make mistakes and feel discouraged or wonder if we will ever be good enough, “there is good news—wonderful, hopeful news! Because God loves [us], He sent His Son, Jesus Christ, who took upon Himself [our] sins so [we] can repent, be forgiven, and keep progressing.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I find no greater testimony that captures the great plan of happiness than when Primary children worldwide sing, “Gethsemane! Jesus loves me,” from a new hymn that we love."
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Gift of the Holy Ghost"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Finally, a most delicious fruit for Latter-day Saints is the gift of the Holy Ghost, His constant companionship. When you turn eight years old, following your baptism, you receive this gift by the laying on of hands. Hundreds of thousands of recent converts have also been confirmed and received the Holy Ghost."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We know through revelation the Holy Ghost “is a personage of Spirit”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " and a member of the Godhead. His very important roles include to warn, to comfort, and to testify."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    },
                    {
                        "type": "text",
                        "text": " A Primary song you often sing, “I Know My Father Lives,” teaches this: “I know my Father lives and loves me too. The Spirit whispers this to me and tells me it is true, and tells me it is true.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Conclusion"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "To my young friends, you have been exceptionally good listeners as I illustrated three delicious fruits of the gospel: we are children of a loving Heavenly Father, the great plan of happiness through Jesus Christ, and the gift of the Holy Ghost."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I close by extending an invitation. When Lehi partook of the fruit in his dream, he said, “It filled my soul with exceedingly great joy; wherefore, I began to be desirous that my family should partake of it also.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " He invited his family to eat the delicious fruit with him. Similarly, consider how your family, friends, and loved ones will be blessed to partake of the fruit that blesses you."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I invite you to do something that is as simple as gospel fruit is delicious: love, share, and invite."
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " Do this with words and actions. As you do so, I promise that you will not only feel joy and happiness that comes as you partake of fruit of the gospel but even greater joy as loved ones around you partake as well."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I close with my testimony of God the Father, Jesus Christ, and the Holy Ghost and of Jesus Christ as our Savior and Redeemer. In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "“You Have a Purpose,” in Personal Development: Children’s Guidebook (2019), 1."
            },
            {
                "noteNumber": 2,
                "text": "“You Have a Purpose,” in Children’s Guidebook, 1."
            },
            {
                "noteNumber": 3,
                "text": "1 Nephi 8:10."
            },
            {
                "noteNumber": 4,
                "text": "1 Nephi 8:11."
            },
            {
                "noteNumber": 5,
                "text": "1 Nephi 8:12."
            },
            {
                "noteNumber": 6,
                "text": "See John 3:16; 1 Nephi 11:21–36; Doctrine and Covenants 14:7; David A. Bednar, “Lehi’s Dream: Holding Fast to the Rod,” Liahona, Oct. 2011, 33–34."
            },
            {
                "noteNumber": 7,
                "text": "“You Are a Precious Child of God,” in Children’s Guidebook, 2."
            },
            {
                "noteNumber": 8,
                "text": "“You Are a Precious Child of God,” in Children’s Guidebook, 2."
            },
            {
                "noteNumber": 9,
                "text": "“I Am a Child of God,” Children’s Songbook, 2–3."
            },
            {
                "noteNumber": 10,
                "text": "Romans 8:16."
            },
            {
                "noteNumber": 11,
                "text": "Alma 40:11."
            },
            {
                "noteNumber": 12,
                "text": "See Alma 40:12."
            },
            {
                "noteNumber": 13,
                "text": "1 Nephi 8:12."
            },
            {
                "noteNumber": 14,
                "text": "Alma 42:8."
            },
            {
                "noteNumber": 15,
                "text": "“Jesus Christ Will Help You,” in For the Strength of Youth: A Guide for Making Choices (2025), 19."
            },
            {
                "noteNumber": 16,
                "text": "“Gethsemane,” Hymns for Home and Church, Gospel Library."
            },
            {
                "noteNumber": 17,
                "text": "Doctrine and Covenants 130:22."
            },
            {
                "noteNumber": 18,
                "text": "See John 15:26; 2 Nephi 32:5; Moroni 8:26; 10:5; Doctrine and Covenants 8:2–3."
            },
            {
                "noteNumber": 19,
                "text": "“I Know My Father Lives,” Children’s Songbook, 5."
            },
            {
                "noteNumber": 20,
                "text": "1 Nephi 8:12."
            },
            {
                "noteNumber": 21,
                "text": "Show love for others, share the fruits of the gospel with others, and invite others to partake of the sweet fruit of the gospel with you (see “Come unto Christ,” ChurchofJesusChrist.org)."
            }
        ]
    },
    {
        "title": "You Are Good Enough to Teach",
        "author": "Gabriel W. Reid",
        "authorRole": "Second Counselor in the Sunday School General Presidency",
        "kicker": "Wherever we teach—in classrooms, in the mission field, in our homes, or one by one—His promise remains the same: He will help us do His work.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Shortly after I was sustained as a member of the Sunday School General Presidency, I felt inadequate, overwhelmed, and completely out of place."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I realized later that I was not the only one trying to make sense of it because I saw a news headline that read, “New Sunday School Leaders Include Men Involved in Church Education and an NFL Player.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Each time I read the headline, I smile and think, “Thankfully, that headline didn’t share the names because I really hope people think I’m one of the scholars!” I especially feel that way today."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Although the headline makes me laugh, it does not always quiet this feeling inside of me: “Lord, I love You, but do You really have the right person?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Perhaps you have asked yourself similar questions:"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Do I know enough?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Am I good enough to teach the gospel of Jesus Christ?"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As I have reflected on the Savior, the Master Teacher, I have noticed a beautiful pattern. Often, as He invited someone to teach His gospel, He also gave them a promise."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "To a small group of ordinary fishermen on the shores of Galilee, men with willing hearts but little experience, He said, “Come ye after me, and I will make you to become fishers of men.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    },
                    {
                        "type": "text",
                        "text": " He did not expect them to become master teachers before they followed Him. He promised that "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "He"
                    },
                    {
                        "type": "text",
                        "text": " would make them into who He needed them to be."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In the Book of Mormon: Another Testament of Jesus Christ, the sons of Mosiah were still young when they went to teach the gospel to the Lamanites. Their past was marked by rebellion, yet their hearts had been changed through the Savior’s redeeming power."
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    },
                    {
                        "type": "text",
                        "text": " As they desired to teach their brethren,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " the Lord promised, “I will make an instrument of thee in my hands.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The Lord invites all of us to teach His gospel."
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    },
                    {
                        "type": "text",
                        "text": " Wherever we teach—in classrooms, in the mission field, in our homes, or one by one—His promise remains the same: He will help us do His work."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We were never meant to do His work alone."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Before the Savior taught His disciples where to go and what to teach, He taught them who to become. His first lesson was not about teaching—it was about discipleship."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And at the heart of discipleship and all that He does is love."
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When asked which commandment was the greatest, the Savior taught, first, to love the Lord our God with all our heart, soul, and mind and, second, to love our neighbor as ourselves."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For every gospel teacher, for every disciple, these two great commandments become one simple invitation: "
                    },
                    {
                        "type": "element",
                        "nodeName": "STRONG",
                        "innerText": "Love the Lord and love those you teach."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "The Reid family.",
                "src": "https://www.churchofjesuschrist.org/imgs/adb5dni2pgiwss8gs9w0r05x0tn8fn5jmnzxiwhv/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My first gospel teachers were my parents. Our home in the village of Leone, American Samoa, became my first classroom of gospel learning. Under one roof, 13 children, two faithful parents, and often extended family learned and lived the gospel together."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My father joined the Church as a young man. My mother had limited formal education. But together they possessed something far more important: a deep and abiding faith in Jesus Christ. They loved the Lord with all their hearts, and because they loved Him, they loved us in a way that helped us love Him too."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Some of the greatest lessons they taught were the ones we caught simply by watching them."
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Those truths were lovingly reinforced by faithful teachers in this little village chapel."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "The village chapel.",
                "src": "https://www.churchofjesuschrist.org/imgs/f7aej7f13jwmhi4cot3yavsjuo2i2053z3dsbx6l/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Many of my earliest Primary classes were held beneath the shade of a mango tree."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Our teachers faithfully prepared each lesson, but what I remember most is how they loved us. They knew us personally—even by name. Their love helped us feel the Savior’s love, and feeling His love helped us feel the truth of His gospel. Looking back, I realize my parents and my Church teachers were following the pattern of the Master Teacher."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The impact of a gospel teacher is not just the message—it is the love of the messenger."
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "Church leaders and missionaries in Sydney, Australia.",
                "src": "https://www.churchofjesuschrist.org/imgs/xc0wf4qj99sso6jwowd75e6xvk1p5rhjpu35xg8p/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My wife and I will always cherish our time in the Australia Sydney Mission. We fell in love with the wonderful people of Sydney and were blessed to serve alongside more than 500 missionaries from over 30 countries."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "We learned that the surest way to truly love those we taught was to deepen our love for the One we taught about. As our love for the Savior deepened, He taught us to see the missionaries as He sees them and to love them as He loves them."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When the resurrected Savior appeared to the people in the Americas, He did not begin by delivering a sermon to the multitude. He began by focusing on the individuals. He invited each person to come unto Him one by one so they could know for themselves that He was Jesus Christ."
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Only then did He teach them His doctrine and the ordinances of His gospel."
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Later, after teaching many other precious truths, Jesus invited the people to return home and ponder what they had learned. We may say that “class” had ended, but His love for the people had not. When He perceived the desire of their hearts, He was filled with compassion. He healed their sick, blessed their children, and prayed for them one by one."
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For the Master Teacher, every lesson was inspired by love for those He taught."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Christ-centered teaching is rooted in relationships. The inspired new Sunday schedule offers weekly opportunities to know and love those we teach, helping them come closer to the Savior and helping them deepen their conversion."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "That is His pattern for every gospel lesson—even shorter ones."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Some may ask, “How can I teach everything in 25 minutes?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Perhaps the better question is “How can I help those I teach connect to the Savior sooner?”"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Dallin H. Oaks taught, “A gospel teacher will never obscure [a learner’s] view of the Master by standing in the way.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The purpose of every lesson is not for people to leave talking about the teacher. It is for them to leave thinking about and loving the Savior."
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Twenty-five-minute lessons are not a limitation; they are an invitation: to focus, more clearly than ever, on helping others come to the Savior."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "If class members leave the lesson feeling closer to the Savior than when they came, we have taught enough."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Brothers and sisters, if you are wondering whether you are good enough to teach the gospel of Jesus Christ, the answer is "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "yes"
                    },
                    {
                        "type": "text",
                        "text": "!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Not because you know everything."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Not because you have every teaching skill."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Not because you always feel capable or confident."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Because you can love the Master Teacher!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "And as you deepen your love for the One you teach about, He will teach you,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    },
                    {
                        "type": "text",
                        "text": " walk beside you,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    },
                    {
                        "type": "text",
                        "text": " and gradually make you into the teacher He knows you can become."
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Whether you see yourself as a scholar, an athlete, a lifelong disciple, or someone who has recently started—or started again—to follow Christ, the invitation is the same."
                    }
                ]
            },
            {
                "type": "image",
                "noPrint": false,
                "alt": "The Savior Jesus Christ.",
                "src": "https://www.churchofjesuschrist.org/imgs/c73483f3dbe711eea0b8eeeeac1e56690a36be97/full/%21500%2C/0/default",
                "credit": null
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Come unto the Master Teacher."
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " Learn of Him."
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    },
                    {
                        "type": "text",
                        "text": " Love Him."
                    },
                    {
                        "type": "note",
                        "noteNumber": "22"
                    },
                    {
                        "type": "text",
                        "text": " As you do, He will help you love those you teach—and that love will make your teaching more like His."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "To teach like the Savior, we must love like the Savior!"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "This is my prayer and invitation, in the name of the Master Teacher, whom we love and who loved us first,"
                    },
                    {
                        "type": "note",
                        "noteNumber": "23"
                    },
                    {
                        "type": "text",
                        "text": " even Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "Emily Ashcraft, “New Sunday School Leaders Include Men Involved in Church Education and an NFL Player,” Apr. 6, 2024, ksl.com."
            },
            {
                "noteNumber": 2,
                "text": "Mark 1:17; see also Matthew 4:19."
            },
            {
                "noteNumber": 3,
                "text": "See Mosiah 27:8–37."
            },
            {
                "noteNumber": 4,
                "text": "See Mosiah 28:1–3."
            },
            {
                "noteNumber": 5,
                "text": "Alma 17:11."
            },
            {
                "noteNumber": 6,
                "text": "See Teaching in the Savior’s Way: For All Who Teach in the Home and in the Church (2024), 1."
            },
            {
                "noteNumber": 7,
                "text": "See Exodus 3:11–12; 4:10–12; Mark 1:17; Alma 17:10–11; Helaman 10:1–5; Doctrine and Covenants 11:21; Moses 6:31–34."
            },
            {
                "noteNumber": 8,
                "text": "See John 13:34–35; 21:15–17; Teaching in the Savior’s Way, 12–15."
            },
            {
                "noteNumber": 9,
                "text": "See Matthew 22:36–40; Mark 12:28–31; Luke 10:25–28."
            },
            {
                "noteNumber": 10,
                "text": "See David A. Bednar, “Seek Learning by Faith,” Liahona, Sept. 2007, 16–24."
            },
            {
                "noteNumber": 11,
                "text": "See Teaching in the Savior’s Way, 14–15; see also Rachel Sterzer Gibson, “What President Oaks Remembers Best About His Seminary Teachers 70 Years Ago—and How It Can Help Teachers Today,” June 4, 2021, newsroom.ChurchofJesusChrist.org."
            },
            {
                "noteNumber": 12,
                "text": "See 3 Nephi 11:13–15."
            },
            {
                "noteNumber": 13,
                "text": "See 3 Nephi 11:16–41."
            },
            {
                "noteNumber": 14,
                "text": "See 3 Nephi 17:1–21."
            },
            {
                "noteNumber": 15,
                "text": "Dallin H. Oaks, “Gospel Teaching,” Liahona, Jan. 2000, 94."
            },
            {
                "noteNumber": 16,
                "text": "See Teaching in the Savior’s Way, 6–7."
            },
            {
                "noteNumber": 17,
                "text": "See John 14:26; Doctrine and Covenants 84:85."
            },
            {
                "noteNumber": 18,
                "text": "See Isaiah 41:10; Doctrine and Covenants 84:88."
            },
            {
                "noteNumber": 19,
                "text": "See Mark 1:17; Ether 12:27."
            },
            {
                "noteNumber": 20,
                "text": "See Matthew 11:28–30; Moroni 10:32."
            },
            {
                "noteNumber": 21,
                "text": "See Matthew 11:29; Doctrine and Covenants 19:23; 88:118."
            },
            {
                "noteNumber": 22,
                "text": "See Matthew 22:37; John 14:15."
            },
            {
                "noteNumber": 23,
                "text": "See 1 John 4:19."
            }
        ]
    },
    {
        "title": "Teach Truth with Love",
        "author": "Clark G. Gilbert",
        "authorRole": "Of the Quorum of the Twelve Apostles",
        "kicker": "Teaching truth with love will be the hallmark of Christ’s disciples in the last days.",
        "bodySections": [
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Introduction"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "It takes courage to stand for truth. It takes even more courage to stand for truth with love. President Dallin H. Oaks has repeatedly emphasized this message."
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    },
                    {
                        "type": "text",
                        "text": " Last general conference he explained the challenge: “When we seek to keep all the commandments in our personal lives, we are sometimes accused of having no love for those who don’t. When we show personal love and support loving causes, we are sometimes misunderstood as implying support for results that contradict our … religious duties.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "2"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "In preparing my message today, I have worried that some would selectively anchor only on truth or others would only anchor on love. I also worried some would see only "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "others"
                    },
                    {
                        "type": "text",
                        "text": "’ shortcomings and forget their own weaknesses. I remember when President Russell M. Nelson gave his talk on peacemaking, I started a mental list of everyone I thought needed his message. He then gave this caution: “You may be thinking … this message would really help someone [else] you know. … But I also hope that you will look deeply into "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "your"
                    },
                    {
                        "type": "text",
                        "text": " [own] heart to see if there are shards of pride or jealousy that prevent "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "you"
                    },
                    {
                        "type": "text",
                        "text": " from becoming a peacemaker.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "3"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I extend that same invitation to all of us today."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Five Principles in Standing for Truth with Love"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Several years ago I received an assignment to speak at Ensign College. President Oaks was the main devotional speaker, and he asked that I speak with him on some of the challenging doctrinal topics of the day."
                    },
                    {
                        "type": "note",
                        "noteNumber": "4"
                    },
                    {
                        "type": "text",
                        "text": " This was a daunting assignment. He then suggested that we not use formal written remarks. Now, I know we follow the prophet, but I hesitantly, even sheepishly, replied that for the sake of the Church, maybe we should write out at least what I said. He relented, and the devotional was entitled “Stand Fast with Love in Proclaiming Truth.” In the address, President Oaks shared five principles I have felt impressed to amplify today."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Principle 1: Avoid Overly Contentious Settings"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "First, avoid overly contentious settings."
                    },
                    {
                        "type": "note",
                        "noteNumber": "5"
                    },
                    {
                        "type": "text",
                        "text": " Elder Neil L. Andersen stated, “There are times when being a peacemaker means that we resist the impulse to respond and instead, with dignity, remain quiet.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "6"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Consider Dostoevsky’s literary description of Christ and the Grand Inquisitor. After repeatedly being denounced, the Savior simply kissed His accuser with no further response."
                    },
                    {
                        "type": "note",
                        "noteNumber": "7"
                    },
                    {
                        "type": "text",
                        "text": " In a lesser way, I recently felt this when a group of national academic leaders aggressively criticized the role of faith in higher education. Recognizing the escalating tension of the moment, I chose at least for that setting to table the discussion despite my strong disagreement with what was being said."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Sometimes tense moments make it more difficult to see what is really causing someone’s protestations. President Nelson taught: “If friends and family should step away from the Church, continue to love them. … Do not be led astray by those whose doubts may be fueled by things "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "you cannot see"
                    },
                    {
                        "type": "text",
                        "text": " in their lives.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "8"
                    },
                    {
                        "type": "text",
                        "text": " I think of Sister Anette Dennis’s story of the "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "wounded"
                    },
                    {
                        "type": "text",
                        "text": " dog who uncharacteristically wouldn’t respond to her owner."
                    },
                    {
                        "type": "note",
                        "noteNumber": "9"
                    },
                    {
                        "type": "text",
                        "text": " Sometimes what we perceive as hostility may actually be someone’s hidden pain or regret."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I failed to see this with a friend who had at one time been spiritually faithful but was now attacking the Church. My frustration came not just because of his bitterness but because I knew he knew better. Unfortunately, rather than recognize the tension of the moment or that he might be hurting for reasons I could not see, I shot back an angry retort. I may have won the debate in the moment, but I lost the Spirit and I failed to help my struggling friend. That day I stood for truth, but I did it without love and without charity."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Principle 2: Find Common Ground"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "A second way to stand for truth with love is to first find common ground. A stake president once brought me a long list of ministering visits. I suggested he choose just one home, given our schedule limitations. Technically he honored the request. But when we arrived at the home, there were five separate individuals waiting inside, each with a completely different concern. I asked, “Well, where do you want to start?” As I listened to their stories, I was tempted at times to interject, but the Spirit kept prompting me to wait. After nearly two hours of listening, going right through our next meeting, I began to better understand their struggles and I could feel their heartfelt strivings. And when I invited them to come to stake conference that evening, each one of them accepted."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Resisting the impulse to initially respond built common ground, which allowed me later to teach from a place of love. As with the Savior, “we love him, because he [loved us first].”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "10"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Principle 3: Be a Light"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The third principle is to be a light. President Nelson taught: “Let your skeptical friends see how much "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "you"
                    },
                    {
                        "type": "text",
                        "text": " love the Lord and His gospel. Surprise their doubting hearts with your believing heart!”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "11"
                    },
                    {
                        "type": "text",
                        "text": " The best way to help someone else keep "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "their"
                    },
                    {
                        "type": "text",
                        "text": " covenants is to keep "
                    },
                    {
                        "type": "element",
                        "nodeName": "I",
                        "innerText": "your"
                    },
                    {
                        "type": "text",
                        "text": " covenants. As Sister Tamara Runia reminded us, “Stay at the tree, … continue to beckon to those you love … that eating the fruit is a happy thing!”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "12"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I shared earlier the story of a tense setting with academic leaders. Perhaps in part because I chose not to engage in the moment, later a university chancellor reached out for counsel in creating a course on character at one of the nation’s most prestigious academic institutions."
                    },
                    {
                        "type": "note",
                        "noteNumber": "13"
                    },
                    {
                        "type": "text",
                        "text": " Being a light opens more doors than any pointed argument ever will."
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Principle 4: Hold to Truth Even in Our Outreach"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Now, the fourth principle is to hold to truth even in our outreach. In April, President Oaks stated that showing love for others “does not mean surrendering our values. The covenants we have made inevitably position us as devoted participants in the eternal contest between truth and error.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "14"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Jeffrey R. Holland similarly reminded us, “Jesus clearly understood what many in our modern culture seem to forget: that there is a crucial difference between the commandment to forgive sin (which He had an infinite capacity to do) and the warning against condoning it (which He never ever did even once).”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "15"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Holland simplified this further when he stated, “As near as I can tell, Christ never "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "once"
                    },
                    {
                        "type": "text",
                        "text": " withheld His love from anyone, but He also never once said to anyone, ‘Because I love you, you are exempt from keeping my commandments.’”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "16"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Some have argued that loving our neighbor (the second commandment) somehow supersedes or takes priority over loving God (the first commandment). But President D. Todd Christofferson pointed out: “Putting the first commandment first does not diminish or limit our ability to keep the second commandment. To the contrary, it amplifies and strengthens it. … Our love of God elevates our ability to love others more fully and perfectly because we in essence partner with God in the care of His children.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "17"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "When we try to love others by minimizing God’s laws, we separate ourselves from the one person who loves them the very most."
                    },
                    {
                        "type": "note",
                        "noteNumber": "18"
                    },
                    {
                        "type": "text",
                        "text": " The Savior showed love for the woman taken in adultery. But He also charged her to “go, and sin no more.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "19"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Principle 5: Stay Anchored in Jesus Christ"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "President Nelson cautioned that the “messages [of the adversary] tend to be loud, bold, and boastful,” while Heavenly Father communicates “simply, quietly, and with such stunning plainness that we cannot misunderstand.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "20"
                    },
                    {
                        "type": "text",
                        "text": " Christ modeled this perfectly for us."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "The fifth principle then is to stay anchored in Jesus Christ. Ask yourself if you carry these Christlike attributes when you are striving to stand for truth with love: “And charity suffereth long, and is kind, and envieth not, and is not puffed up, seeketh not her own, is not easily provoked, thinketh no evil, and rejoiceth not in iniquity but rejoiceth in … truth.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "21"
                    }
                ]
            },
            {
                "type": "section-header",
                "level": "H2",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Closing"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "For disciples of Jesus Christ, truth and love "
                    },
                    {
                        "type": "element",
                        "nodeName": "EM",
                        "innerText": "always walk together"
                    },
                    {
                        "type": "text",
                        "text": ". I believe teaching truth with love will be the hallmark of Christ’s disciples in the last days. For some this will require greater conviction. For others it will demand greater charity. I know the Lord will help us as we strive to teach truth with love. In the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "See Dallin H. Oaks, “Going Forward with Religious Freedom and Nondiscrimination” (Joseph Smith Lecture at the University of Virginia, Nov. 12, 2021), mormonstudies.as.virginia.edu/event/dallin-h-oaks-going-forward-with-religious-freedom-nondiscrimination/; see also Dallin H. Oaks and Clark G. Gilbert, “Stand Fast with Love in Proclaiming Truth” (Ensign College devotional, May 17, 2022), speeches.ensign.edu; Dallin H. Oaks and Kristen M. Oaks, “Stand for Truth” (worldwide devotional for young adults, May 21, 2023), Gospel Library; Dallin H. Oaks, “Alive in Christ,” Liahona, May 2026, 85–87."
            },
            {
                "noteNumber": 2,
                "text": "Dallin H. Oaks, “Alive in Christ,” 86."
            },
            {
                "noteNumber": 3,
                "text": "Russell M. Nelson, “Peacemakers Needed,” Liahona, May 2023, 101."
            },
            {
                "noteNumber": 4,
                "text": "President Oaks discussed topics including prophetic direction and infallibility, race, and LGBTQ issues."
            },
            {
                "noteNumber": 5,
                "text": "Both President Nelson and President Oaks have specifically referred to tense interactions on social media. (See Russell M. Nelson, “Peacemakers Needed,” 100; Dallin H. Oaks and Clark G. Gilbert, “Stand Fast with Love in Proclaiming Truth.”)"
            },
            {
                "noteNumber": 6,
                "text": "Neil L. Andersen, “Following Jesus: Being a Peacemaker,” Liahona, May 2022, 19."
            },
            {
                "noteNumber": 7,
                "text": "See Fyodor Dostoevsky, The Brothers Karamazov, trans. Richard Pevear and Larissa Volokhonsky (New York: Alfred A. Knopf, 1990), 262."
            },
            {
                "noteNumber": 8,
                "text": "Russell M. Nelson, “Choices for Eternity” (worldwide devotional for young adults, May 15, 2022), Gospel Library."
            },
            {
                "noteNumber": 9,
                "text": "See J. Anette Dennis, “His Yoke Is Easy and His Burden Is Light,” Liahona, Nov. 2022, 80."
            },
            {
                "noteNumber": 10,
                "text": "1 John 4:19."
            },
            {
                "noteNumber": 11,
                "text": "Russell M. Nelson, “Choices for Eternity.”"
            },
            {
                "noteNumber": 12,
                "text": "Vincent Alma Wood, quoted in Tamara W. Runia, “Seeing God’s Family Through the Overview Lens,” Liahona, Nov. 2023, 67."
            },
            {
                "noteNumber": 13,
                "text": "See Clark G. Gilbert, “Religious Colleges Are Booming. Why?,” The Chronicle of Higher Education, Jan. 13, 2026, chronicle.com."
            },
            {
                "noteNumber": 14,
                "text": "Dallin H. Oaks, “Alive in Christ,” 86."
            },
            {
                "noteNumber": 15,
                "text": "Jeffrey R. Holland, “The Cost—and Blessings—of Discipleship,” Liahona, May 2014, 8."
            },
            {
                "noteNumber": 16,
                "text": "Jeffrey R. Holland, “The Second Half of the Second Century of Brigham Young University” (Brigham Young University conference address, Aug. 23, 2021), 4, speeches.byu.edu."
            },
            {
                "noteNumber": 17,
                "text": "D. Todd Christofferson, “The First Commandment First” (Brigham Young University devotional, Mar. 22, 2022), 2, speeches.byu.edu."
            },
            {
                "noteNumber": 18,
                "text": "Both President Oaks and President Nelson have reminded us of the relationship between God’s love and God’s laws. (See Dallin H. Oaks, “The Paradox of Love and Law” [Brigham Young University–Idaho devotional, Oct. 30, 2018], video.byui.edu; Russell M. Nelson, “The Love and Laws of God” [Brigham Young University devotional, Sept. 17, 2019], speeches.byu.edu.)"
            },
            {
                "noteNumber": 19,
                "text": "John 8:11."
            },
            {
                "noteNumber": 20,
                "text": "Russell M. Nelson, “Hear Him,” Liahona, May 2020, 89."
            },
            {
                "noteNumber": 21,
                "text": "Moroni 7:45."
            }
        ]
    },
    {
        "title": "Closing Remarks",
        "author": "Dallin H. Oaks",
        "authorRole": "President of The Church of Jesus Christ of Latter-day Saints",
        "kicker": "As we look forward, we are welcoming the world, in person or virtually, to the Salt Lake Temple Celebration.",
        "bodySections": [
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "My dear brothers and sisters, the great messages of this conference and the Spirit of the Lord have inspired all of us to concentrate our worship, focus our learning, and unite our testimonies on the teachings of the Lord Jesus Christ and His Father’s plan for our eternal increase and joy."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As the talks of this conference are published, we invite all to study and ponder them prayerfully and to act in faith on the principles they explain. The Lord has promised, “Unto him that receiveth I will give more.”"
                    },
                    {
                        "type": "note",
                        "noteNumber": "1"
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As we look forward, we are welcoming the world, in person or virtually, to the Salt Lake Temple Celebration. On April 5, 2027, the temple doors will open to the public—the first such opening since 1893, 134 years ago."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Join us at TempleSquare.org or through the Temple Square app to learn more."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "Following this session of general conference, the first episode of a dynamic video series, "
                    },
                    {
                        "type": "element",
                        "nodeName": "CITE",
                        "innerText": "Dedicate"
                    },
                    {
                        "type": "text",
                        "text": ", will premiere worldwide in multiple languages. More will come in the months ahead, including a virtual tour of the Salt Lake Temple."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "As we now go forward, we invoke the blessings of the Lord on you and your families, blessings of peace and contentment. And we bless your service of the Lord Jesus Christ in these challenging times."
                    }
                ]
            },
            {
                "type": "paragraph",
                "nodes": [
                    {
                        "type": "text",
                        "text": "I close with my testimony. This is the restored gospel of Jesus Christ in His Church of Jesus Christ of Latter-day Saints. Truth is to be found here—truth about the teachings of the Lord and truth about the covenant path that will lead us to our destiny, the destiny desired by our Heavenly Father. Of all this I testify to you in the name of Jesus Christ, amen."
                    }
                ]
            }
        ],
        "notes": [
            {
                "noteNumber": 1,
                "text": "2 Nephi 28:30."
            }
        ]
    }
]