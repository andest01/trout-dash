using System.Collections.Generic;
using System.Data.Entity;

namespace TroutDash.EntityFramework
{
    public class TroutDashContext : DbContext
    {
        public TroutDashContext()
            : base("TroutDash")
        {
        }

        public DbSet<Stream> Streams { get; set; }
        public DbSet<County> Counties { get; set; }
        public DbSet<State> States { get; set; }
        public DbSet<HucSubregion> HucSubregions { get; set; }
        public DbSet<RestrictionSection> RestrictionSections { get; set; }
    }


    public class Stream
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LocalName { get; set; }
        public double Length { get; set; }
        public double PublicLength { get; set; }
        public bool HasBrookTrout { get; set; }
        public bool IsBrookTroutStocked { get; set; }
        public bool HasBrownTrout { get; set; }
        public bool IsBrownTroutStocked { get; set; }
        public bool HasRainbowTrout { get; set; }
        public bool IsRainbowTroutStocked { get; set; }
        public HucSubregion HucSubregion { get; set; }
        public string StatusMessage { get; set; }
        public bool HasSpecialRegulations { get; set; }
        public virtual ICollection<State> States { get; set; }
        public virtual ICollection<County> County { get; set; }
        public virtual ICollection<FishingRestriction> Regulations { get; set; }
    }

    public class County
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Stream> Streams { get; set; }
        public State State { get; set; }
    }

    public class State
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }
        public virtual ICollection<County> Counties { get; set; }
        public virtual ICollection<Stream> Streams { get; set; }
    }

    public class HucSubregion
    {
        public int Id { get; set; }
        public string HucSubregionCode { get; set; }
        public virtual ICollection<Stream> Streams { get; set; }
    }

    public class FishingRestriction
    {
        public int Id { get; set; }
        public string LongText { get; set; }
        public string ShortText { get; set; }
        public bool IsHarvestRestriction { get; set; }
        public bool IsAnglingRestriction { get; set; }
        public string DefaultColor { get; set; }
    }

    public interface ISection
    {
        float Start { get; set; }
        float Stop { get; set; }
    }

    public class RestrictionSection : ISection
    {
        public FishingRestriction Restriction { get; set; }
        public float Start { get; set; }
        public float Stop { get; set; }
    }

    public class PublicSection : ISection
    {
        public string Type { get; set; }
        public float Start { get; set; }
        public float Stop { get; set; }
    }
}